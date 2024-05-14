import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReminderTable = () => {
    const [reminders, setReminders] = useState([]);
    const [error, setError] = useState(null);

    const fetchReminders = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/reminders/list');
            setReminders(response.data);
        } catch (error) {
            setError(error.message || 'An error occurred while fetching reminders.');
        }
    };

    useEffect(() => {
        fetchReminders();
    }, []);

    //Delete function
    const handleDelete = async (id) => {
        try {
          await axios.delete(`http://localhost:3000/api/reminders/delete/${id}`);
          // Filter out the deleted reminder from the state
          setReminders(reminders.filter((reminder) => reminder._id !== id));
        } catch (error) {
          console.error(error);
          setError(error.response.data.error || 'An error occurred while deleting the reminder.');
        }
      };


    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4 text-white">Reminder List</h1>
            {error && <p className="text-red-500">{error}</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1.5 gap-4">
                {reminders.map((reminder) => (
                    <div key={reminder._id} className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-lg font-semibold mb-2">{reminder.title}</h2>
                        <p className="text-gray-600">Date: {new Date(reminder.date).toLocaleDateString()}</p>
                        <p className="text-gray-600">Time: {new Date(reminder.time).toLocaleTimeString()}</p>
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded mt-2"
                            onClick={() => handleDelete(reminder._id)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReminderTable;


