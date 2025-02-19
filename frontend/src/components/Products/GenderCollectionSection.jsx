import React from "react";
import { Link } from "react-router-dom";
import menCollection from "../../assets/images/men_collection.jpg";
import womenCollection from "../../assets/images/women_collection.jpg";

const GenderCollectionSection = () => {
  return (
    <section className="py-10 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-6">
        {/* Women's Collection */}
        <div className="relative flex-1 group">
          <img
            src={womenCollection}
            alt="Women's Collection"
            className="w-full h-[350px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-6 left-6 bg-white bg-opacity-90 p-4 rounded-md">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Women's Collection
            </h2>
            <Link to="/collections/all?gender=women" className="text-gray-900 underline text-sm md:text-base">
              Shop Now
            </Link>
          </div>
        </div>

        {/* Men's Collection */}
        <div className="relative flex-1 group">
          <img
            src={menCollection}
            alt="Men's Collection"
            className="w-full h-[350px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-6 left-6 bg-white bg-opacity-90 p-4 rounded-md">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Men's Collection
            </h2>
            <Link to="/collections/all?gender=men" className="text-gray-900 underline text-sm md:text-base">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
