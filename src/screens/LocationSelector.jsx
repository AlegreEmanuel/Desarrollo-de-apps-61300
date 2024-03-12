import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from "expo-location"
import { googleApi } from '../firebase/googleApi'
import { useDispatch, useSelector } from 'react-redux'
import { setUserLocation } from '../features/auth/authSlice'
import { usePostUserLocationMutation } from '../services/ShopService'

const LocationSelector = () => {
    const [location, setLocation] = useState({latitude: "", longitude:""})
    const [error,setError] = useState(null)
    const [address, setAddress] = useState(null)
    const {localId} = useSelector(state => state.authReducer.value)
    const dispatch = useDispatch()
    const [triggerPostAddress,result] = usePostUserLocationMutation()

    useEffect(()=>{
        (async ()=>{
            let {status} = await Location.requestForegroundPermissionsAsync()
            if (status !=="granted"){
                setError("Permission to access location was denied")
                return
            }
            let location = await Location.getCurrentPositionAsync({})
            setLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            })
        })()
    },[])

    useEffect(()=>{
        (async()=>{
            try {
                if(location.latitude){
                    const url_reverse_geocode =`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${googleApi.mapStatic}`
                    const response = await fetch(url_reverse_geocode)
                    const data = await response.json()
                    setAddress(data.results[0].formatted_address)

                }
            } catch (err) {
                
            }

        })()
    }, [location])


const onConfirmAddress = ()=>{
    const locationFormatted={
        latitude: location.latitude,
        longitude: location.longitude,
        address:address,
    }
    dispatch(setUserLocation(locationFormatted))

    triggerPostAddress({localId, location: locationFormatted})
}





  return (
    <View>
      <Text>My Adresses</Text>
      {location.latitude ? (
        <View>
            <Text>Lat: {location.latitude}, Long:{location.longitude}</Text>
            <MapPreview location={location}/>
            <Text>{address}</Text>
            <Pressable style={styles.Button} onPress={onConfirmAddress}>
                <Text style={styles.ButtonText}>
                   Confirm Address
                </Text>
            </Pressable>

        </View>
      ): (<Text>
        {error}
      </Text>)}
    </View>
  )
}

export default LocationSelector

const styles = StyleSheet.create({})