import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setProfileImage } from '../features/auth/authSlice';
import { useGetProfileImageQuery, useGetUserLocationQuery } from '../services/ShopService';
import SubmitButton from '../components/submitButton';
import { colors } from '../global/colors';

const MyProfile = ({ navigation }) => {
    const dispatch = useDispatch();
    const { localId } = useSelector((state) => state.authReducer.value);
    const { data, error, isLoading } = useGetProfileImageQuery(localId);
    const userLocation = useGetUserLocationQuery(localId);
    console.log(userLocation)

    useEffect(() => {
        if (data) {
            dispatch(setProfileImage(data.image));
        }
    }, [data, dispatch]);
    

    const profileImage = useSelector((state) => state.authReducer.value.profileImage);
    const address = userLocation.data ? userLocation.data.address : null;


    return (
        <View style={styles.container}>
            {profileImage ? (
                <Image source={{ uri: profileImage }} style={styles.image} resizeMode='cover' />
            ) : (
                <View style={styles.addPhotoContainer}>
                    <Image source={require("../../assets/profilePhoto.png")} style={styles.defaultImage} resizeMode='cover' />
                </View>
            )}

            <View style={styles.buttonContainer}>
                <SubmitButton title={profileImage ? "Change profile picture" : "Add profile picture"} onPress={() => navigation.navigate("Image Selector")} />
                <SubmitButton title={"My Address"} onPress={() => navigation.navigate("LocationMiddleScreen", { address })} />
            </View>
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

    buttonContainer: {
        marginTop: 20,
        alignItems: 'center', 
    },
});