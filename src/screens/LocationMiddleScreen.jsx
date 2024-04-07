import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import StyleText from '../components/StyleText';
import { colors } from '../global/colors';
import { Feather } from '@expo/vector-icons';

const LocationMiddleScreen = ({ navigation, route }) => {
    const { address } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <StyleText strong color="black" >{address ? address : "No Address"}</StyleText>
            </View>
            <View style={styles.rightContainer}>
                <Pressable onPress={() => navigation.navigate("Location Selector")} style={styles.buttonContainer}>
                    <View >
                        <Feather name="map-pin" size={24} color="black" />
                    </View>
                    <View>
                        <StyleText >Change address</StyleText>
                    </View>
                </Pressable>
            </View>
        </View>
    );
};

export default LocationMiddleScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: colors.blue_200,
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
        borderColor: colors.blue_300,
        borderWidth: 2,
    },
    leftContainer: {
        flex: 1,
    },
    rightContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    
    buttonContainer: {
        alignItems: "center",
    },
    
});
