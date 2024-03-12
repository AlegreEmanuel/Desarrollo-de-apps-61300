import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from "expo-image-picker"
import { useDispatch, useSelector } from 'react-redux';
import { setCameraImage,setProfileImage } from '../features/auth/authSlice';
import { usePostProfileImageMutation } from '../services/ShopService';
import { colors } from '../global/colors';


const ImageSelector = ({navigation}) => {
    const [image, setImage] = useState(null);
    const  {localId,profileImage } = useSelector((state) => state.authReducer.value);
    const [triggerSaveProfileImage, result] = usePostProfileImageMutation();
    const dispatch = useDispatch();

  const verifyCameraPermissions = async () => {
    const {granted} =await ImagePicker.requestCameraPermissionsAsync();
    if(!granted){
        return false
    }
    return true
  };

  const pickImage= async () =>{
    const isCameraOk = await verifyCameraPermissions()
    if(isCameraOk) {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect:[9,16],
            base64: true,
            quality: 1,
        })
        if(!result.canceled){
            setImage(result.assets[0].uri)
        }
    }
  }


    const confirmImage = () => {
        dispatch(setCameraImage(image));
        dispatch(setProfileImage(image)); 
        triggerSaveProfileImage({ localId, image });
        navigation.goBack();
    };
  



    return (
        <View style={styles.container}>
            {image || profileImage ? (
                <>
                    <Image source={{ uri: image || profileImage }} style={styles.image} resizeMode="cover" />
                    <Pressable style={styles.button} onPress={pickImage}>
                        <Text style={styles.buttonText}>Take Another Photo</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={confirmImage}>
                        <Text style={styles.buttonText}>Confirm Photo</Text>
                    </Pressable>
                </>
            ) : (
                <View style={styles.noPhotoContainer}>
                    <Text>No photo to show</Text>
                    <Pressable style={styles.button} onPress={pickImage}>
                        <Text style={styles.buttonText}>Take a Photo</Text>
                    </Pressable>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.blue_100,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
        borderRadius: 100, 
    },
    noPhotoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderBlockColor: 'black',
        borderWidth: 2,
        width: 200,
        height: 200,
        borderRadius: 100, 
    },
    button: {
        backgroundColor: colors.blue_300,
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
        fontFamily: 'Fuerte',
    },
});

export default ImageSelector;