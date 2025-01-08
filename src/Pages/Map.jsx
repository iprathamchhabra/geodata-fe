import React, { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const [initialCoordinates, setInitialCoordinates] = useState(null);
  const [mapPoints, setMapPoints] = useState([]);
  const [myData, setMyData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);

  const reverseCoordinates = (arr) => {
    return [arr[1], arr[0]];
  };

  useEffect(() => {
    const selectedCoordinates = myData[selectedData]?.coordinates;
    if (selectedCoordinates) {
      const first = reverseCoordinates(selectedCoordinates[0]);
      const map = selectedCoordinates.map((e) => {
        return { location: reverseCoordinates(e) };
      });

      setInitialCoordinates(first);
      setMapPoints(map.map((mp) => mp.location));
    }
  }, [selectedData, myData]);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await axios.get("https://geodata-be-production.up.railway.app/geodata/list");
        const userid = localStorage.getItem("userId");

        const data = response.data
          .filter((e) => e.user_id === userid)
          .map((e) => ({
            title: e.title, 
            coordinates: JSON.parse(e.geometry).coordinates[0],
          }));

        setMyData(data);
      } catch (error) {
        console.error("Failed to fetch coordinates:", error);
      }
    };

    fetchCoordinates();
  }, []);

  return (
    <div className="bg-gradient-to-r from-teal-400 to-cyan-500 min-h-screen py-16">
      <div className="container mx-auto text-center bg-white p-8 rounded-lg shadow-xl max-w-3xl">
        <h1 className="text-3xl font-extrabold text-teal-800 mb-6">
          Select a Location to View the Map
        </h1>

        <select
          onChange={(e) => setSelectedData(e.target.value)}
          className="mb-6 px-4 py-2 border border-teal-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-lg"
        >
          <option value="">Choose a location</option>
          {myData.map((el, i) => (
            <option key={i} value={i}>
              {el.title} {}
            </option>
          ))}
        </select>

        {initialCoordinates && (
          <div className="w-full h-96 mx-auto my-4 rounded-lg shadow-lg overflow-hidden">
            <MapContainer
              center={initialCoordinates}
              zoom={7}
              className="h-full w-full rounded-lg"
            >
              <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {mapPoints.length > 0 && (
                <Polygon positions={mapPoints} color="teal" weight={3} />
              )}
            </MapContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default Map;
