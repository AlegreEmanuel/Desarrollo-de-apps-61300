import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../global/colors";


const Card =({children, style}) => {
    return (
        <View style={{...styles.container, ...style}}>
           {children}
        </View>
    )
}

export default Card;


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.blue_100, 
        padding: 16, 
        borderRadius: 8, 
        marginVertical: 8, 
        marginHorizontal: 'auto',
        elevation: 4, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 0 }, 
        shadowOpacity: 0.5,
        shadowRadius: 4,
        justifyContent: 'center',
        alignItems:'center',
        width: '50%',
        
        
    },


})