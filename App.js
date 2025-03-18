import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./screens/LoginScreen";
import FacebookLoginScreen from "./screens/FacebookLoginScreen"; // Facebook giriş ekranı eklendi ✅
import HomeScreen from "./screens/HomeScreen";
import GameScreen from "./screens/GameScreen";
import LeaderboardScreen from "./screens/LeaderboardScreen";
import TestFirebase from "./screens/TestFirebase";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginScreen">
                {/* Giriş ekranında video oynayacak, başlık görünmesin */}
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
                {/* Facebook giriş ekranı */}
                <Stack.Screen name="FacebookLoginScreen" component={FacebookLoginScreen} />
                {/* Ana ekranlar */}
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="GameScreen" component={GameScreen} />
                <Stack.Screen name="LeaderboardScreen" component={LeaderboardScreen} />
                <Stack.Screen name="TestFirebase" component={TestFirebase} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
