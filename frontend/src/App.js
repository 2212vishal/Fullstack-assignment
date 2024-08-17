import "./App.css";
import { GiAbstract045 } from "react-icons/gi";
import Footer from "./components/Footer";
import { FiSearch } from "react-icons/fi";
import Card from "./components/Card";
import CreateCard from "./components/CreateCard";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [cardData, setCardData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showCreateCard, setShowCreateCard] = useState(false);

  // Fetch all cards initially
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/cards");
        setCardData(response.data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };
    fetchCards();
  }, []);

  // Handle search functionality
  const handleSearch = async (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value) {
      try {
        const response = await axios.get(`http://localhost:4000/api/v1/cards/${e.target.value}`);
        setCardData(response.data.length > 0 ? response.data : []);
      } catch (error) {
        console.error("Error fetching card by title:", error);
        setCardData([]);  // Set empty if an error occurs
      }
    } else {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/cards");
        setCardData(response.data);
      } catch (error) {
        console.error("Error fetching all cards:", error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="bg-primary w-full p-6 flex justify-between">
        <p className="flex items-baseline gap-2 text-2xl text-white">
          <GiAbstract045 />
          <span>Abstract | Help Center </span>
        </p>
        <button
          onClick={() => setShowCreateCard(true)}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Create a new card
        </button>
      </div>

      {showCreateCard && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-25 flex justify-center items-center z-50">
          <CreateCard
            setShowCreateCard={setShowCreateCard}
            setCardData={setCardData}
          />
        </div>
      )}

      <div className="bg-middleColor w-full p-16 gap-6 flex flex-col justify-center items-center">
        <p className="text-4xl font-bold">How can we help?</p>
        <div className="relative lg:w-4/12 w-6/12">
          <FiSearch className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-3 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            className="bg-gradient-to-r from-darkColor to-lightDarkColor text-white text-lg py-2 px-4 pl-10 rounded-full w-full focus:outline-none"
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 p-4">
        {cardData.length > 0 ? (
          cardData.map((card) => (
            <Card key={card._id} title={card.title} description={card.description} />
          ))
        ) : (
          <p>No cards found</p>
        )}
      </div>

      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default App;
