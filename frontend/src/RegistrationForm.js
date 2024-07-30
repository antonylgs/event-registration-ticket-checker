import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    day1: false,
    day2: false,
  });
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  function isValidPhoneNumber(phoneNumber) {
    // Define the regex pattern for a phone number
    const phonePattern =
      /^(\+?\d{1,4}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?[\d\s-]{3,}$/;

    // Test the input string against the pattern
    return phonePattern.test(phoneNumber);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isPhoneValid = isValidPhoneNumber(formData.phone);

    if (!isPhoneValid) {
      alert("The phone number is invalid.");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/register`,
        formData
      );
      history.push("/registrationresult", { success: true, formData });
    } catch (error) {
      history.push("/registrationresult", {
        success: false,
        formData,
      });
    }
  };

  return (
    <div className="flex flex-col gap-8 mb-8">
      <h1 className="font-garamond text-2xl text-nbred sm:text-center">
        REGISTER TO THE HERITAGE FESTIVAL
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="flex gap-12 m-auto justify-center">
          <div
            className={`relative border border-black h-20 w-20 flex items-center justify-center flex-col p-12 gap-0 hover:bg-black hover:text-white cursor-pointer transition-all ${
              formData.day1 && "bg-black text-white"
            }`}
          >
            <p>Saturday</p>
            <p className="font-bold text-lg">10</p>
            <p>July</p>
            <input
              type="checkbox"
              name="day1"
              className="absolute w-full h-full opacity-0 cursor-pointer"
              checked={formData.day1}
              onChange={handleChange}
            />
          </div>
          <div
            className={`relative border border-black h-20 w-20 flex items-center justify-center flex-col p-12 gap-0 hover:bg-black hover:text-white cursor-pointer transition-all ${
              formData.day2 && "bg-black text-white"
            }`}
          >
            <p>Sunday</p>
            <p className="font-bold text-lg">11</p>
            <p>July</p>
            <input
              type="checkbox"
              name="day2"
              className="absolute w-full h-full opacity-0 cursor-pointer"
              checked={formData.day2}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:justify-center sm:items-center">
          <div className="flex">
            <p className="text-nbred relative left-2">*</p>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border-b sm:min-w-[300px] border-black w-full px-3 focus:outline-none"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex">
            <p className="text-nbred relative left-2">*</p>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border-b sm:min-w-[300px] border-black w-full px-3 focus:outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex">
            <p className="text-nbred relative left-2">*</p>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="border-b sm:min-w-[300px] border-black w-full px-3 focus:outline-none"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex gap-2 sm:justify-center sm:items-center">
          <input type="checkbox" className="cursor-pointer" required></input>
          <p className="text-[8px]">
            I accept the terms and conditions of the company and acknowledge
            having read the privacy policy.
          </p>
        </div>
        <button
          type="submit"
          className="bg-nbred text-white w-fit font-bold px-4 py-2 sm:m-auto hover:bg-black transition-all"
        >
          Get my ticket
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
