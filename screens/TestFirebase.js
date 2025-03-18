import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { db } from "../utils/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const TestFirebase = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "game_sessions"));
      let gameSessions = [];
      querySnapshot.forEach((doc) => {
        gameSessions.push(doc.data());
      });
      setData(gameSessions);
    };
    
    fetchData();
  }, []);

  return (
    <View>
      <Text>Firestore Test</Text>
      {data.length > 0 ? <Text>Veri çekildi!</Text> : <Text>Veri bulunamadı.</Text>}
    </View>
  );
};

export default TestFirebase;
