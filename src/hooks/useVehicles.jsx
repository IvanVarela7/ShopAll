import React from "react";
import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  limit,
} from "firebase/firestore";

export default function useVehicles(collectionName) {
  const [vehiculos, setVehiculos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const collectionRef = collection(db, collectionName);
        const queryFilter = query(collection(db, "vehiculos"), limit(8));

        const querySnapshot = await getDocs(queryFilter);

        if (querySnapshot.size === 0) {
          console.log("No hay resultados");
        }

        const fetchedItems = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setVehiculos(fetchedItems);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

		fetchData();
  }, [collectionName]);

  return {
    vehiculos,
    loading,
  };
}
