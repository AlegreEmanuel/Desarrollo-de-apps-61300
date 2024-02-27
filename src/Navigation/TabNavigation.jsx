import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import ShopStack from "./ShopStack"
import CartStack from "./CartStack"
import { StyleSheet } from "react-native-web"
import { colors } from "../global/colors"
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { View, Text } from "react-native"
import { Octicons } from '@expo/vector-icons';
import OrdersStack from "./OrdersStack"




const TabNavigator = () => {

    const Tab = createBottomTabNavigator();
    return(
        <NavigationContainer >

            <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar
            }}
            >

                <Tab.Screen name="ShopTab" component={ShopStack} options={{
                    tabBarIcon: ({focused})=> {
                        return(
                            <View style= {styles.tabContainer}>
                            <Entypo name="shop" size={40} color={focused ? "black" : "grey"} /> 
                            <Text style={{color: focused ? "black" : "grey"}}>Shop</Text>
                            </View>                       
                            )
                    }
                }}/>
                    
                <Tab.Screen name="CartTab" component={CartStack} options={{
                    tabBarIcon: ({focused})=> {
                        return(
                            <View style= {styles.tabContainer}>

                            <FontAwesome name="shopping-cart" size={40} color={focused ? "black" : "grey"} />
                            <Text style={{color: focused ? "black" : "grey"}}>Cart</Text>
                            </View>  
                            )
                    }
                }}/>

            <Tab.Screen name="OrdersTab" component={OrdersStack} options={{
                    tabBarIcon: ({focused})=> {
                        return(
                            <View style= {styles.tabContainer}>
                            <Octicons name="checklist" size={40} color={focused ? "black" : "grey"}  />
                            <Text style={{color: focused ? "black" : "grey"}}>Orders</Text>
                            </View>  
                            )
                    }
                }}/>

            </Tab.Navigator>


        </NavigationContainer>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.blue_300,
        height: 70,
   
    },
    tabContainer: {
        justifyContent: "center",
        alignItems: "center",
    }

})