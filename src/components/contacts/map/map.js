import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../../hooks/use-map';
import * as S from './map.styled';
import mapIcon from 'assets/img/icon-blip.svg';

function Map({city}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: mapIcon,
    iconSize: [56, 70],
    iconAnchor: [26, 70],
  });

  useEffect(() => {
    if (map) {
      leaflet
        .marker({
          lat: city.lat,
          lng: city.lng,
        }, {
          icon: defaultCustomIcon,
        })
        .addTo(map);
    }
  }, [map, city, defaultCustomIcon]);

  return (
    <S.Map
      style={{height: '100%'}}
      ref={mapRef}
    >
    </S.Map>
  );
}

export default Map;
