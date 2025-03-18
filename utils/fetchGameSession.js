import { db } from "./firebaseConfig";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";

// En son başlayan oyun seansını getir
export const fetchLatestGameSession = async () => {
    try {
        const gameSessionsRef = collection(db, "game_sessions");
        const q = query(gameSessionsRef, orderBy("start_time", "desc"), limit(1));
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
            const sessionData = querySnapshot.docs[0].data();
            return sessionData.images; // 5'li resim setini döndür
        } else {
            console.log("No active game session found.");
            return null;
        }
    } catch (error) {
        console.error("Error fetching game session:", error);
        return null;
    }
};
