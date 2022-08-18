import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -34.6849583,
  lng: -58.5606109,
};

const Maps = () => {
  return (
    // <GoogleMap
    //   mapContainerStyle={containerStyle}
    //   center={center}
    //   zoom={10}
    //   googleMapsApiKey="AIzaSyBoHIGhu8OkaC7Emec78CdRQb2WbdmcD48"
    // >
    //   <Marker
    //     position={{
    //       LatLng: -34.6849583,
    //       LatLngLiteral: -58.5606109,
    //     }}
    //     title={"Stack"}
    //   />
    //   <> </>
    // </GoogleMap>
       <> </>
  );
};
export default Maps;
