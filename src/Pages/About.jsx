import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-teal-400 to-cyan-500 py-16">
      <div className="container mx-auto px-6 py-12 bg-white bg-opacity-80 rounded-xl shadow-2xl max-w-4xl">
        <h1 className="text-4xl font-extrabold text-center text-teal-800 mb-6">
          Welcome to GeoData App
        </h1>

        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          GeoData is a cutting-edge platform designed to empower individuals and
          organizations with powerful tools to manage and visualize geographical
          data. Whether you're working with complex geographical boundaries or
          pinpointing specific points of interest, GeoData is your go-to
          solution for seamless data management.
        </p>

        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          With an intuitive interface, GeoData makes it easier than ever to
          upload and organize your{" "}
          <span className="font-semibold text-yellow-500">.geojson</span> files.
          Each file can be enriched with titles and details, helping you keep
          track of valuable geographical information.
        </p>

        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          But GeoData isn’t just about uploading data—it’s about bringing it to
          life. Our interactive map allows you to visualize your data in
          dynamic, insightful ways. Whether you need to zoom into specific
          regions, filter by categories, or explore data in real-time, the app
          offers a comprehensive set of features designed to make your
          geographical data experience smooth and intuitive.
        </p>

        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          GeoData is built with both professionals and casual users in mind.
          Whether you're a GIS expert, a researcher, or just a curious explorer
          of geographical data, our platform ensures a seamless experience.
          Manage, analyze, and collaborate on spatial datasets—all within one
          powerful tool.
        </p>

        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          Dive into the world of geographical data and start leveraging its full
          potential with GeoData. The possibilities are endless—join us today
          and explore data like never before!
        </p>

        <div className="text-center mt-8">
          <a
            href="/login"
            className="bg-cyan-600 text-white text-lg font-semibold py-3 px-8 rounded-full hover:bg-cyan-700 transition duration-300 transform hover:scale-105"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
