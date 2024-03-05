import React, { useState } from 'react';

const Addw = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    salary: '',
    salaryType: 'Monthly', // Set default salary type
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.name && formData.age && formData.salary) {
      setIsSubmitted(true);
      // You can submit the form data here (e.g., using fetch API)
      console.log('Form submitted:', formData);
      setFormData({ name: '', age: '', salary: '', salaryType: 'Monthly' }); // Clear form after submission
    } else {
      alert('Please fill in all mandatory fields.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {!isSubmitted && (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <h2 className="text-xl font-bold text-center mb-4">Add Worker</h2>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 font-medium mb-2">
              Name (Required)
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="age" className="text-gray-700 font-medium mb-2">
              Age (Required)
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="salary" className="text-gray-700 font-medium mb-2">
              Salary (Required)
            </label>
            <input
              type="number"
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="salaryType" className="text-gray-700 font-medium mb-2">
              Salary Type
            </label>
            <select
              id="salaryType"
              name="salaryType"
              value={formData.salaryType}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            >
              <option value="Monthly">Monthly</option>
              <option value="Hourly">Hourly</option>
              {/* You can add additional options if needed */}
            </select>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
      )}
      {isSubmitted && (
        <div className="text-center">
          <p>Worker added successfully!</p>
          {/* You can add a link to redirect to another page after successful submission */}
        </div>
      )}
    </div>
  );
};

export default Addw;
