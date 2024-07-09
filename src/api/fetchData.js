import {collection, getDocs} from "firebase/firestore";
import {db} from "../auth/firebaseConfig.js";
import {useEffect, useState} from "react";

export const useFetchData = () => {

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const querySnapshot = await getDocs(collection(db, "myData"));
      querySnapshot.forEach((doc) => {
        setData(doc.data());
      });
      setLoading(false);
    }
    getData();
  }, []);

  return {data, loading};
}