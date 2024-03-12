import { StyleSheet, Image, Text, View, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {setProfileImage } from '../features/auth/authSlice';
import { useGetProfileImageQuery } from '../services/ShopService';
import { colors } from "../global/colors";


const MyProfile = ({ navigation }) => {
    const dispatch = useDispatch();
    const { localId } = useSelector((state) => state.authReducer.value);
    const {myAddress} = useSelector(state => state.authReducer.value)

    const { data, error, isLoading } = useGetProfileImageQuery(localId);

    useEffect(() => {
        if (data) {
            dispatch(setProfileImage(data.image));
        }
    }, [data, dispatch]);

    const profileImage = useSelector((state) => state.authReducer.value.profileImage);

    return (
        <View style={styles.container}>
            {profileImage ? (
                <Image source={{ uri: profileImage }} style={styles.image} resizeMode='cover' />
            ) : (
                <View style={styles.addPhotoContainer}>
                    <Image source={require("../../assets/profilePhoto.png")} style={styles.defaultImage} resizeMode='cover' />
                </View>
            )}
            <Pressable style={styles.Button} onPress={() => navigation.navigate("Image Selector")}>
                <Text style={styles.ButtonText}>
                    {profileImage ? 'Change profile picture' : 'Add profile picture'}
                </Text>
            </Pressable>
            <Pressable style={styles.Button} onPress={() => navigation.navigate("LocationMiddleScreen", { address: myAddress })}>
                <Text style={styles.ButtonText}>
                    My Address
                </Text>
            </Pressable>
        </View>
    );
}



export default MyProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue_100,
    },

    image: {
        width: 200,
        height: 200,
        borderRadius: 100, 
        borderWidth: 2
    },

    addPhotoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue_200, 
        width: 200,
        height: 200,
        borderRadius: 100, 
    },

    defaultImage: {
        width: 100,
        height: 100,
    },
    Button: {
        marginTop: 10,
        padding: 10,
        backgroundColor: colors.blue_300,
        borderRadius: 5,
    },
    ButtonText: {
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
        fontFamily: 'Fuerte'
    },
});
