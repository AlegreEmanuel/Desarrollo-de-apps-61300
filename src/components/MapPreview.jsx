import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import {googleApi} from '../firebase/googleApi'

const MapPreview = ({location}) => {
    const mapPreviewUrl= `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=13&size=600x300&maptype=roadmap
    &markers=color:blue%7Clabel:S%7C${location.latitude},${location.longitude}
    &markers=color:green%7Clabel:G%7C40.711614,-74.012318
    &markers=color:red%7Clabel:C%7C40.718217,-73.998284
    &key=${googleApi.mapStatic}`


  return (
    <View style={styles.mapPreview}>
      <Image style={styles.mapImage} source={{uri: mapPreviewUrl}}/>
    </View>
  )
}

export default MapPreview

const styles = StyleSheet.create({
    mapPreview:{
        justifyContent: "center",
        alignItems: "center",
    },
    mapImage:{
        width: 300,
        height: 300,
    }
    




})