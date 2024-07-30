import React from "react";
import { Link, useLocation } from "react-router-dom";

function RegistrationResult() {
  const location = useLocation();
  const { success, formData } = location.state;

  return (
    <div className="flex flex-col gap-8">
      <div className="text-white bg-nb-pic3 min-w-[100vw] relative right-4 mb-4 flex flex-col py-24 px-12 justify-center items-center bg-no-repeat bg-center bg-cover">
        {success && <img src="/nb-valid.svg" />}
        <h1 className="text-xl font-bold">
          {success ? "Successful registration" : "Registration failed"}
        </h1>
        {success ? (
          <p className="text-center">
            You've just received your ticket by email!
          </p>
        ) : (
          <p className="text-center">
            An error has occurred, please check your information.
          </p>
        )}
      </div>
      {success && (
        <div className="flex flex-col gap-4 sm:items-center">
          <p className="font-bold">Reservation summary</p>
          <p>
            <span className="font-bold">Dates: </span>
            {formData.day1 && "Saturday, July 10th"}
            {formData.day1 && formData.day2 && " and "}
            {formData.day2 && "Sunday, July 11th"}
          </p>
          <p>
            <span className="font-bold">Name: </span> {formData.name}
          </p>
          <p>
            <span className="font-bold">Email: </span> {formData.email}
          </p>
          <p>
            <span className="font-bold">Phone: </span>
            {formData.phone}
          </p>
        </div>
      )}
      <Link to="/" className="flex justify-end sm:justify-center">
        <button className=" text-white font-bold px-4 py-2 bg-black">
          Back to home page
        </button>
      </Link>
    </div>
  );
}

export default RegistrationResult;
