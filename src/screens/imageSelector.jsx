import { StyleSheet, Text, View, Image, Pressable, Alert } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { setCameraImage, setProfileImage } from '../features/auth/authSlice';
import { usePostProfileImageMutation } from '../services/ShopService';
import { colors } from '../global/colors';
import SubmitButton from '../components/submitButton';

const ImageSelector = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const {localId, profileImage } = useSelector((state) => state.authReducer.value);
  const [triggerSaveProfileImage, result] = usePostProfileImageMutation();
  const dispatch = useDispatch();

  const pickImage = async (sourceType) => {
    let pickerFunction;
    if (sourceType === 'library') {
      pickerFunction = ImagePicker.launchImageLibraryAsync;
    } else if (sourceType === 'camera') {
      const isCameraOk = await verifyCameraPermissions(); 
      if (!isCameraOk) {
        Alert.alert('Permission denied', 'Permission is required to access the camera.');
        return;
      }
      pickerFunction = ImagePicker.launchCameraAsync;
    } else {
      return;
    }
  
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'Permission is required to access the gallery.');
      return;
    }
  
    const result = await pickerFunction({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9, 16],
      quality: 1,
    });
  
    if (!result.canceled && result.assets.length > 0) { 
      setImage(result.assets[0].uri);
    }
  };

  const confirmImage = () => {
    dispatch(setCameraImage(image));
    dispatch(setProfileImage(image));
    triggerSaveProfileImage({ localId, image });
    navigation.goBack();
  };

  const verifyCameraPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    return status === 'granted';
  };

  return (
    <View style={styles.container}>
      {image || profileImage ? (
        <>
          <Image source={{ uri: image || profileImage }} style={styles.image} resizeMode="cover" />
          <SubmitButton title="Select from Gallery" onPress={() => pickImage('library')} />
          <SubmitButton title="Take a New Photo" onPress={() => pickImage('camera')} />
          <SubmitButton title="Confirm Photo" onPress={confirmImage} />
        </>
      ) : (
        <View style={styles.noPhotoContainer}>
          <Text>No photo to show</Text>
          <SubmitButton title="Select from Gallery" onPress={() => pickImage('library')} />
          <SubmitButton title="Take a New Photo" onPress={() => pickImage('camera')} />
        </View>
      )}
    </View>
  );
};

export default ImageSelector;


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
        width: 300,
        height: 300,
        borderRadius: 200, 
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
