import React, { Fragment } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import "./Map.scss";

const Map = () => {
  return (
    <Fragment>
    <div id="leafletMap">
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; Mahmoud Farargy'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            </Marker>
        </MapContainer>
    </div>

    </Fragment>
  );
};

export default Map;
