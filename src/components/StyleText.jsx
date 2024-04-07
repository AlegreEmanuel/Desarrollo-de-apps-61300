import React from "react";
import { Text, StyleSheet } from "react-native";

export default function StyleText({ children, strong, color, ...props }) {
    const textStyles = [
        strong ? styles.fuerte : styles.debil,
        color && { color }, 
    ];
    return <Text style={textStyles} {...props}>{children}</Text>;
}

const styles = StyleSheet.create({
    debil: {
        fontFamily: 'Debil',
        fontSize: 20,
        marginBottom: 8,

    },
    fuerte: {
        fontFamily: 'Fuerte',
        fontSize: 24,
        marginBottom: 8,

    }
});

