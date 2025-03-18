import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Video } from "expo-av";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const LoginScreen = () => {
    const videoRef = useRef(null);
    const navigation = useNavigation();
    const [isVideoStarted, setIsVideoStarted] = useState(false);
    const [isVideoFinished, setIsVideoFinished] = useState(false);

    const handleStartVideo = async () => {
        setIsVideoStarted(true);
        if (videoRef.current) {
            try {
                await videoRef.current.playAsync();
            } catch (error) {
                console.error("Video oynatılamadı:", error);
            }
        }
    };

    const handleVideoEnd = () => {
        setIsVideoFinished(true);
    };

    const handleEnterPress = () => {
        navigation.navigate("FacebookLoginScreen");
    };

    return (
        <View style={styles.container}>
            {!isVideoStarted ? (
                <TouchableOpacity onPress={handleStartVideo} style={styles.startButton}>
                    <Text style={styles.startText}>TAP TO START</Text>
                </TouchableOpacity>
            ) : (
                <>
                    {!isVideoFinished && (
                        <Video
                            ref={videoRef}
                            source={require("../assets/entrance.mp4")}
                            style={styles.video}
                            resizeMode="cover"
                            shouldPlay={true} // Video başlar başlamaz oynatılmalı
                            isLooping={false}
                            onPlaybackStatusUpdate={(status) => {
                                if (status.didJustFinish) {
                                    handleVideoEnd();
                                }
                            }}
                        />
                    )}
                    {isVideoFinished && (
                        <TouchableOpacity onPress={handleEnterPress} style={styles.enterButton}>
                            <Text style={styles.enterText}>ENTER</Text>
                        </TouchableOpacity>
                    )}
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
    },
    video: {
        width: width,
        height: height,
        position: "absolute",
        top: 0,
        left: 0,
    },
    startButton: {
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10,
    },
    startText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#000",
    },
    enterButton: {
        position: "absolute",
        bottom: 100,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10,
    },
    enterText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#000",
    },
});

export default LoginScreen;
