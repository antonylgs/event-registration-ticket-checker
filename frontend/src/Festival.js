import React from "react";
import { Link } from "react-router-dom";

function Festival() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-garamond text-2xl sm:text-4xl">
          Festival Heritage
        </h1>
        <div className="w-24 h-[2px] sm:w-48 bg-red-600"></div>
      </div>
      <div className="min-w-[100vw] relative sm:right-4 sm:max-h-[400px] sm:overflow-hidden sm:flex sm:items-center">
        <img
          src="/nb-pic1.svg"
          className="min-w-[100vw] relative right-4 sm:right-0 sm:top-32"
        ></img>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-garamond text-xl">Tradition & innovation</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium
          vehicula magna, eget tincidunt justo. Proin id libero in mauris
          faucibus consectetur. Quisque quis efficitur libero, id euismod nunc.{" "}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-bold">Nulla facilisi</h3>
        <p>
          Quisque sodales urna vitae sem mattis, nec pellentesque nulla
          tincidunt. Duis eu scelerisque mi. Sed et ipsum vitae felis commodo
          gravida. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia Curae; Nulla facilisi.
        </p>
        <p>Pellentesque commodo quam sed lectus ultricies.</p>
        <ul className="list-disc ml-8">
          <li>Pellentesque commodo</li>
          <li>Pellentesque commodo</li>
          <li>Pellentesque commodo</li>
          <li>Pellentesque commodo</li>
          <li>Pellentesque commodo</li>
          <li>Pellentesque commodo</li>
        </ul>
      </div>
      <div className="min-w-[100vw] relative sm:right-4 sm:max-h-[400px] sm:overflow-hidden sm:flex sm:items-center">
        <img
          src="/nb-pic2.svg"
          className="min-w-[100vw] relative right-4 sm:right-0 sm:top-32"
        ></img>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-bold">Nulla facilisi</h3>
        <p>
          Quisque sodales urna vitae sem mattis, nec pellentesque nulla
          tincidunt. Duis eu scelerisque mi. Sed et ipsum vitae felis commodo
          gravida. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia Curae; Nulla facilisi.
        </p>
      </div>
      <Link to="/festivalregistration">
        <button className="bg-nbred text-white font-bold px-4 py-2 hover:bg-black transition-all">
          REGISTER TO THE HERITAGE FESTIVAL
        </button>
      </Link>
    </div>
  );
}

export default Festival;
