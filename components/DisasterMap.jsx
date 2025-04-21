'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Circle, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

export default function DisasterMap({ incidents = [] }) {
  const [map, setMap] = useState(null);
  const [center] = useState([28.3949, 84.1240]); // Nepal's center coordinates

  const customIcon = new Icon({
    iconUrl: '/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  useEffect(() => {
    if (map) {
      map.invalidateSize();
    }
  }, [map]);

  return (
    <div className="h-[600px] w-full rounded-lg overflow-hidden">
      <MapContainer
        center={center}
        zoom={7}
        style={{ height: '100%', width: '100%' }}
        whenCreated={setMap}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {incidents.map((incident, index) => (
          <div key={index}>
            <Marker
              position={[incident.lat, incident.lng]}
              icon={customIcon}
            >
              <Popup>
                <div>
                  <h3 className="font-bold">{incident.title}</h3>
                  <p>{incident.description}</p>
                  <p className="text-sm text-muted-foreground">
                    Severity: {incident.severity}
                  </p>
                </div>
              </Popup>
            </Marker>
            <Circle
              center={[incident.lat, incident.lng]}
              radius={incident.radius || 1000}
              pathOptions={{
                color: incident.severity === 'high' ? 'red' : 'orange',
                fillColor: incident.severity === 'high' ? 'red' : 'orange',
                fillOpacity: 0.2,
              }}
            />
          </div>
        ))}
      </MapContainer>
    </div>
  );
}