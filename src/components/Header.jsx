import { Text, View, StyleSheet } from "react-native";
import { colors } from "../global/colors";

function Header({title}) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                {title}
            </Text>
        </View>
    )
}

export default Header;


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue_200,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    
    text:{
        fontSize: 40,
        fontFamily: 'Fuerte',
    }
})