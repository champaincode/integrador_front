import React from "react";

import { Marker } from "@react-google-maps/api";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -38.7152088,
  lng: -62.2605273,
};

const Maps = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBoHIGhu8OkaC7Emec78CdRQb2WbdmcD48"
  })

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
    >
        <Marker position={{  lat: -38.7152088,
  lng: -62.2605273,}} title={"Café martinez"}  draggable={true} MarkerOptions/>
  

   
      </GoogleMap>
  ) : <></>
}
export default Maps;