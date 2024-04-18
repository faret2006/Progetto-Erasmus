import React, { useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

function MapComponent() {
  const mapRef = useRef(null);

  useEffect(() => {
    // Check if the container reference is valid
    if (!mapRef.current) return;

    // Create a Leaflet map only if the container reference is valid and the map has not been initialized yet
    const map = L.map(mapRef.current).setView([39.466667, -0.375000], 13);

    // Add a base map layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    return () => {
      // Cleanup: remove the map when the component is unmounted
      map.remove();
    };
  }, []); // Make sure to pass an empty array as dependency to execute the effect only once

  return <div ref={mapRef} style={{ height: '525px' }} />;
}

export default MapComponent;
