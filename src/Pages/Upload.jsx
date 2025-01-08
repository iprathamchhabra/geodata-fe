import React, { useState, useEffect } from "react";
import axios from "axios";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState("");
  const [geoDataList, setGeoDataList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
      fetchGeoData(storedUserId);
    }
  }, []);

  const fetchGeoData = async (id) => {
    const baseURL = `https://geodata-be.railway.internal/geodata/user?user_id=${id}`;
    try {
      const response = await axios.get(baseURL);
      setGeoDataList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFileChange = (e) => setFile(e.target.files[0]);
  const handleTitleChange = (e) => setTitle(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file_path", file);
    formData.append("title", title);
    formData.append("user_id", userId);

    setLoading(true);

    try {
      await axios.post("https://geodata-be.railway.internal/geodata", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("File uploaded successfully");
      fetchGeoData(userId);
      setFile(null);
      setTitle("");
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r from-teal-400 to-cyan-500 min-h-screen bg-cover bg-center p-8">
        <div className="max-w-2xl mx-auto my-12 p-8 bg-white bg-opacity-80 rounded-xl shadow-lg">
          <h1 className="text-3xl text-center font-semibold text-teal-700 mb-6">
            Upload a GeoJSON File
          </h1>
          <form
            className="flex flex-col gap-6 text-gray-800"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col">
              <label
                htmlFor="title"
                className="text-lg font-medium text-teal-700 mb-2"
              >
                File Title
              </label>
              <input
                type="text"
                id="title"
                placeholder="Enter a title for your file"
                value={title}
                onChange={handleTitleChange}
                className="px-4 py-3 rounded-lg text-gray-800 border-2 border-teal-300 focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-300"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="file"
                className="text-lg font-medium text-teal-700 mb-2"
              >
                Choose a [.geojson] File
              </label>
              <input
                type="file"
                id="file"
                accept=".geojson"
                onChange={handleFileChange}
                className="px-4 py-3 rounded-lg text-gray-800 border-2 border-teal-300 focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-300"
              />
            </div>

            <button
              className={`bg-teal-600 hover:bg-teal-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              type="submit"
              disabled={loading}
            >
              {loading ? "Uploading..." : "Upload File"}
            </button>
          </form>
        </div>

        <div className="max-w-2xl mx-auto mt-12 p-6 bg-white bg-opacity-80 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-teal-700 text-center mb-4">
            Uploaded GeoJSON Files
          </h2>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="bg-teal-100 text-teal-700 px-6 py-3 text-left">
                  Title
                </th>
              </tr>
            </thead>
            <tbody>
              {geoDataList.length > 0 ? (
                geoDataList.map((data, index) => (
                  <tr key={index} className="hover:bg-teal-50">
                    <td className="text-gray-700 px-6 py-3">{data.title}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    className="text-gray-500 px-6 py-3 text-center"
                    colSpan="1"
                  >
                    No files uploaded yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Upload;
