import { useState, useEffect } from 'react';
import axios from 'axios';

const CardsComponent = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    fetchCardsData();
  }, []);

  const fetchCardsData = async () => {
    try {
      const response = await axios.get('https://api.example.com/cards');
      setCardsData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="cards-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {cardsData.map((card, index) => (
        <div key={index} className="card bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-lg font-bold mb-2">{card.title}</h2>
          <p className="text-gray-700 mb-4">{card.content}</p>
          <button className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition-colors">
            Learn More
          </button>
        </div>
      ))}
    </div>
  );
};

export default CardsComponent;
