import React, { useState } from 'react';
import axios from 'axios';

const AddReminderForm = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const currentDate = new Date();
    const currentTime = currentDate.getTime();

    const selectedDateTime = new Date(`${date}T${time}`);
    const selectedTime = selectedDateTime.getTime();

    if (selectedTime < currentTime) {
      setError('Please select a future date and time.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/reminders/add', {
        title,
        date,
        time: selectedDateTime,
      });

      console.log(response.data);
      setTitle('');
      setDate('');
      setTime('');
    } catch (error) {
      console.error(error);
      setError(error.response.data.error || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className=" bg-white rounded-md overflow-hidden shadow-md p-12 mr-14 ml-14">
      <h1 className="text-2xl font-semibold mb-4">Add Reminder</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Date:
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">
            Time:
          </label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add Reminder
        </button>
      </form>
    </div>
  );
};

export default AddReminderForm;

