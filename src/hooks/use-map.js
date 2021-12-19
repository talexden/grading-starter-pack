import {useEffect, useState} from 'react';
import leaflet from 'leaflet';

const MAP_TAILE_LAYER = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const MAP_TAILE_LAYER_ATTRIBUTIONS = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';


function useMap(mapRef, city) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.lat,
          lng: city.lng,
        },
        zoom: city.zoom,
      });

      leaflet
        .tileLayer(
          MAP_TAILE_LAYER,
          {
            attribution: MAP_TAILE_LAYER_ATTRIBUTIONS,
          },
        )
        .addTo(instance);

      setMap(instance);
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;
