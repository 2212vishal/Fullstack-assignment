import React, { useState } from 'react';
import axios from 'axios';

function CreateCard({ setShowCreateCard, setCardData }) {
  const [newCardData, setNewCardData] = useState({
    title: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCardData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://fullstack-assignment-c1dy.onrender.com/api/v1/cards', newCardData);
      setCardData(prevState => [...prevState, response.data]);
      setShowCreateCard(false);
    } catch (error) {
      console.error("Error creating card:", error);
    }
  };

  return (
    <div className="relative flex flex-col gap-2 bg-lightgray border rounded p-4 w-96">
      <button
        className="absolute top-2 right-2"
        onClick={() => setShowCreateCard(false)}
      >
        X
      </button>
      <div className="flex flex-col gap-2 p-2">
        <h2 className="font-bold text-2xl">Create Card</h2>
        <div className="flex flex-col">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newCardData.title}
            onChange={handleChange}
            required
            className="border rounded p-1"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={newCardData.description}
            onChange={handleChange}
            required
            className="border rounded p-1"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Create Card
        </button>
      </div>
    </div>
  );
}

export default CreateCard;
