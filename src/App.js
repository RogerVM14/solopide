import React, { useState, useEffect } from 'react';
import './App.css';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
// import leafGreen from './assets/leaf-green.png';
import markerShadow from './assets/marker-shadow.png';
import markerIcon from './assets/marker.webp'



export default function Markers() {

  //UseState
  const [coords, setCoords] = useState({
    greenIcon: {
      status:'null',
      lat:'',
      lng:'',
      name:'',
      categorie:''
    },
    zoom: 15
  });
  //UseState


  const grenIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [38, 40], // size of the icon
    shadowSize: [30, 45], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [10, 70],  // the same for the shadow
    popupAnchor: [-3, -76]
  });

  const positionGreenIcon = [coords.greenIcon.lat, coords.greenIcon.lng];


  const getLocalization = (position) => {
    setCoords({
      greenIcon: {
        status: 'ready',
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        name:'La casa de doña chole',
        categorie:'Comida china'
      },
    });
    console.log('Listo...');
  }

  useEffect(() => {
    if (navigator.geolocation) {
      console.log('Localizando..');
      navigator.geolocation.getCurrentPosition(getLocalization);
    }
  },[])




  return (
    <div>
      <div>{coords.greenIcon.lat} AND  {coords.greenIcon.lng}</div>
      {coords.greenIcon
        ? <Map className="map" center={positionGreenIcon} zoom={coords.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={positionGreenIcon} icon={grenIcon} onclick={() => { console.log(`Este es el nombre ${coords.greenIcon.name}`);
        }}>
          <Popup >
            {coords.greenIcon.name}
            <hr />
            {coords.greenIcon.categorie}
        </Popup>
        </Marker>
      </Map>
        :<div> cargando....</div>
      }
    </div>
   
  );

}

