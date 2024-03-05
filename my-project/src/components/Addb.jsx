import React from 'react'
import { useState } from 'react';
import Header from './Header'

const Addb = () => {

  const [formData, setFormData] = useState({
    businessName: '',
    businessDetails: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.businessName && formData.businessDetails) {
      setIsSubmitted(true);
      // You can submit the form data here (e.g., using fetch API)
      console.log('Form submitted:', formData);
      setFormData({ businessName: '', businessDetails: '' }); // Clear form after submission
    } else {
      alert('Please fill in all mandatory fields.');
    }
  };
  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gray-100 p-4">
      {!isSubmitted && (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <h2 className="text-xl font-bold text-center mb-4">Add Business</h2>
          <div className="flex flex-col">
            <label htmlFor="businessName" className="text-gray-700 font-medium mb-2">
              Business Name (Required)
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="businessDetails" className="text-gray-700 font-medium mb-2">
              Business Details (Required)
            </label>
            <textarea
              id="businessDetails"
              name="businessDetails"
              value={formData.businessDetails}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
      )}
      {isSubmitted && (
        <div className="text-center">
          <p>Bussiness Created</p>
          {/* You can add a link to redirect to another page after successful submission */}
        </div>
      )}
    </div>
    </>
  )
}

export default Addb