import React from "react";
import { View, Text, Button } from "react-native";

const LeaderboardScreen = ({ route, navigation }) => {
    const { score } = route.params;

    return (
        <View>
            <Text>Tebrikler! Puanın: {score}</Text>
            <Button title="Tekrar Oyna" onPress={() => navigation.navigate("GameScreen")} />
        </View>
    );
};

export default LeaderboardScreen;
