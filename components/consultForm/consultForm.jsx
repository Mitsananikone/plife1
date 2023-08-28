/** @format */
import React, { useState } from 'react';
export default function ConsultationForm(style) {
  const [selectedCountry, setSelectedCountry] = useState("Germany");
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true); // Show the popup

    setTimeout(() => {
      setShowPopup(false); // Hide the popup after 3 seconds
    }, 3000);
  };
  return (
    <form className="space-y-4 mt-16" style={style}>
      <div className="flex space-x-4 ">
        <div className="w-1/2">
          <label htmlFor="firstName">
            First Name<span className="required">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            className="w-full p-2 border"
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="lastName">
            Last Name<span className="required">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            className="w-full p-2 border"
          />
        </div>
      </div>

      <div className="flex space-x-4">
        <div className="w-1/2">
          <label htmlFor="email">
            Email<span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="w-full p-2 border"
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="destination">
            Preferred Destination<span className="required">*</span>
          </label>
          <select id="destination" className="w-full p-2 border">
            <option value="destination1">Destination 1</option>
            <option value="destination2">Destination 2</option>
          </select>
        </div>
      </div>

      <div className="flex space-x-4">
        <div className="w-1/3">
          <label htmlFor="country">Country</label>
          <select
            id="country"
            className="w-full p-2 border"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option value="Germany">Germany (Deutschland)</option>
            <option value="country2">Country 2</option>
          </select>
        </div>
        <div className="w-2/3">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="number"
            id="phoneNumber"
            placeholder="Phone Number"
            className="w-full p-2 border"
          />
        </div>
      </div>

      <div className="flex space-x-4">
        <div className="w-1/2">
          <label htmlFor="treatmentCategory">
            Treatment Categories<span className="required">*</span>
          </label>
          <select id="treatmentCategory" className="w-full p-2 border">
            <option value="surgeryType1">Surgery Type 1</option>
            <option value="surgeryType2">Surgery Type 2</option>
          </select>
        </div>
        <div className="w-1/2">
          <label htmlFor="procedure">
            Procedure<span className="required">*</span>
          </label>
          <select id="procedure" className="w-full p-2 border">
            <option value="procedure1">Procedure 1</option>
            <option value="procedure2">Procedure 2</option>
          </select>
        </div>
      </div>

      <label htmlFor="textInput"></label>
      <input
        type="text"
        id="textInput"
        placeholder="Please add any additional information for our team here"
        className="w-full p-2 border h-56 text-center"
      />

      <div>
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">
            I agree to receive other communication for PHOENIQUELIFE and accept
            terms of use and privacy policy
          </span>
        </label>
      </div>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="bg-gray-400 p-4 rounded shadow-lg">
            Your request has been received. We will contact you shortly.
          </div>
        </div>
      )}

      <button
        className="bg-gray-600 opacity-60 text-black font-bold py-2 px-4 rounded whitespace-nowrap h-16 shadow-lg hover:shadow-xl hover:opacity-90 transition-all my-8 w-64 hover:text-white mb-32"
        type="submit"
        onClick={handleSubmit} 
      >
        SUBMIT
      </button>
    </form>
  );
}
