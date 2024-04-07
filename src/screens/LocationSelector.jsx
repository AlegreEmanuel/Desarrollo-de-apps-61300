import {Text, View} from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from "expo-location"
import  {googleApi}  from '../firebase/googleApi'
import { useDispatch, useSelector } from 'react-redux'
import { setUserLocation } from '../features/auth/authSlice'
import { usePostUserLocationMutation } from '../services/ShopService'
import MapPreview from '../components/MapPreview'
import SubmitButton from '../components/submitButton'
import { useNavigation } from '@react-navigation/native';


const LocationSelector = () => {
    const [location, setLocation] = useState({ latitude: "", longitude: "" });
    const [error, setError] = useState(null);
    const [address, setAddress] = useState(null);
    const { localId } = useSelector(state => state.authReducer.value);
    const dispatch = useDispatch();
    const [triggerPostAddress, result] = usePostUserLocationMutation();
    const navigation = useNavigation();

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setError("Permission to access location was denied");
                return;
            }
            try {
                let location = await Location.getCurrentPositionAsync({});
                setLocation({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude
                });
            } catch (err) {
                console.error("Error getting location:", err);
                setError("Error getting location. Please try again.");
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            try {
                if (location.latitude) {
                    const url_reverse_geocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${googleApi.mapStatic}`;
                    const response = await fetch(url_reverse_geocode);
                    const data = await response.json();
                    setAddress(data.results[0].formatted_address);
                }
            } catch (err) {
                console.error("Error fetching address:", err);
                setError("Error fetching address. Please try again.");
            }
        })();
    }, [location]);

    const onConfirmAddress = () => {
        const locationFormatted = {
            latitude: location.latitude,
            longitude: location.longitude,
            address: address,
        };

        dispatch(setUserLocation(locationFormatted));
        triggerPostAddress({ localId, location: locationFormatted });
        navigation.goBack();
    };

    return (
        <View>
            <Text>My Addresses</Text>
            {error && <Text>{error}</Text>}
            {location.latitude ? (
                <View>
                    <Text>Lat: {location.latitude}, Long:{location.longitude}</Text>
                    <MapPreview location={location} />
                    <Text>{address}</Text>
                    <SubmitButton title={"Confirm Address"} onPress={onConfirmAddress} />
                </View>
            ) : (
                <Text>{error}</Text>
            )}
        </View>
    );
}

export default LocationSelector;

