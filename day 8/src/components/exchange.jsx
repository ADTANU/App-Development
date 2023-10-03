import React, { useState, useEffect } from 'react';
import '../assets/css/exchange.css';
import Footer from './footer';

const initialExchangeRates = [
  { currency: 'USD ', rate: 1.2 },
  { currency: 'GBP', rate: 1.4 },
  { currency: 'JPY', rate: 110 },
];

const ExchangeRates = () => {
  // State to store exchange rate data
  const [exchangeRates, setExchangeRates] = useState(initialExchangeRates);

  // Fetch exchange rate data from an API (you should replace this with a real API)
  useEffect(() => {
    // Example API endpoint for exchange rates (replace with your API)
    const apiUrl = 'https://api.example.com/exchange-rates';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API response is an array of exchange rate objects
        setExchangeRates(data);
      })
      .catch((error) => {
        console.error('Error fetching exchange rates:', error);
      });
  }, []);

  return (
    <div>
      <h1>Exchange Rates</h1>
      <div className="exchange-rates-list">
        <table>
          <thead>
            <tr>
              <th>Currency</th>
              <th>Exchange Rate</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {exchangeRates.map((rate) => (
              <tr key={rate.currency}>
                <td>{rate.currency}</td>
                <td>{rate.rate}</td>
                <td>
                  <button>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default ExchangeRates;
