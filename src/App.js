import { useState } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import BusinessList from "./components/BusinessList";

const App = () => {
  const [businessess, setBusinesses] = useState([
    {
      imageSrc: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'MarginOtto Pizzeria',
      address: '1010 Paddington Way',
      city: 'Flavortown',
      state: 'NY',
      zipCode: '10101',
      category: 'Italian',
      rating: 4.5,
      reviewCount: 90
    },
    {
      imageSrc: 'https://plus.unsplash.com/premium_photo-1663858367001-6319e4cec7c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBpenphfGVufDB8fDB8fHww',
      name: 'MarginOtto Pizzeria',
      address: '1010 Paddington Way',
      city: 'Flavortown',
      state: 'NY',
      zipCode: '10101',
      category: 'Italian',
      rating: 4.5,
      reviewCount: 90
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1511689660979-10d2b1aada49?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'MarginOtto Pizzeria',
      address: '1010 Paddington Way',
      city: 'Flavortown',
      state: 'NY',
      zipCode: '10101',
      category: 'Italian',
      rating: 4.5,
      reviewCount: 90
    }
  ]);
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <BusinessList businessess={businessess} />
    </div>
  );
}

export default App;
