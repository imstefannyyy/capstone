import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; 

function Map({ coordinate, name }) {
    var icon = L.icon({
        iconUrl: '/marker-icon.png',
        iconRetinaUrl: '/marker-icon-2x.png',
        shadowUrl: '/marker-shadow.png',
        iconSize: [25, 41],
		iconAnchor: [12, 41],
		popupAnchor: [1, -34],
		tooltipAnchor: [16, -28],
		shadowSize: [41, 41]
    });

    return (
        <>
            {coordinate && coordinate.length === 2 ? (
                <MapContainer
                    center={coordinate}
                    zoom={6}
                    style={{ height: '200px', width: '100%' }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                        <Marker position={coordinate} icon={icon}>
                        <Popup>{name}</Popup>
                    </Marker>
                </MapContainer>
            ) : (
                <>No map data available.</>
            )}
        </>
    )
}

export default Map;
