import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors';
import { Feather } from '@expo/vector-icons';


const LocationMiddleScreen = ({ navigation, address }) => {
    return (
        <View >
            {address ? (
                <View style={styles.container}>
                    <Text style={styles.title}>{address}</Text>
                    <Pressable onPress={() => navigation.navigate("Location Selector")}>
                        <Text>Change address</Text>
                        <Feather name="map-pin" size={24} color="black" />
                    </Pressable>
                </View>
            ) : (
                <View style={styles.container}>
                    <Text style={styles.title}>No Address</Text>
                    <Pressable style={styles.box} onPress={() => navigation.navigate("Location Selector")}>
                        <Text style={styles.title}>Add address</Text>
                        <Feather name="map-pin" size={35} color="black" />
                    </Pressable>
                </View>
            )}
        </View>
    );
};
    
    

    export default LocationMiddleScreen;


    const styles = StyleSheet.create({
      container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: colors.blue_200,
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
        borderColor: colors.blue_300,
        borderWidth: 2, 
        
      },
      box:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: colors.blue_200,
        padding: 16,
        marginVertical: 8,
       
      },
      title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
      },
      
    });