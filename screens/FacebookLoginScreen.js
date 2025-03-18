import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const FacebookLoginScreen = ({ navigation }) => {
    const handleFacebookLogin = () => {
        // Buraya Facebook giriş işlemlerini ekleyeceğiz.
        alert("Facebook ile giriş yapma ekranı burada açılacak!");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Facebook Giriş</Text>
            <TouchableOpacity style={styles.button} onPress={handleFacebookLogin}>
                <Text style={styles.buttonText}>FACEBOOK İLE GİRİŞ YAP</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#1877F2",
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default FacebookLoginScreen;
