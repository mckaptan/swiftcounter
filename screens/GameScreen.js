import React, { useState, useEffect } from "react";
import { View, Text, Image, Button } from "react-native";
import { fetchLatestGameSession } from "../utils/fetchGameSession";
import Timer from "../components/Timer";

const GameScreen = ({ navigation }) => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(10);

    useEffect(() => {
        fetchLatestGameSession().then(setImages);
    }, []);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft]);

    const handleNextImage = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setTimeLeft(images[currentIndex + 1].difficulty === "easy" ? 10 : images[currentIndex + 1].difficulty === "medium" ? 20 : 40);
        } else {
            navigation.navigate("LeaderboardScreen");
        }
    };

    return (
        <View>
            {images.length > 0 ? (
                <>
                    <Text>{`How many ${images[currentIndex]?.object}s are in the image?`}</Text>
                    <Image source={{ uri: images[currentIndex]?.url }} style={{ width: 300, height: 300 }} />
                    <Timer timeLeft={timeLeft} />
                    <Button title="Next" onPress={handleNextImage} />
                </>
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    );
};

export default GameScreen;
