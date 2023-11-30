import React from 'react'
import { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, query, limit } from 'firebase/firestore';


export default function useDress(collectionName) {
	const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const db = getFirestore();
        const collectionRef = collection(db, collectionName);
				const queryFilter = query(collection(db, "moda"), limit(13));

        const querySnapshot = await getDocs(queryFilter);

        if (querySnapshot.size === 0) {
          console.log('No hay resultados');
        }

        const fetchedItems = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setItems(fetchedItems);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionName]);


	return { items, loading }
}
