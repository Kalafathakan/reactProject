import React, { useState, useEffect } from "react";
import axios from 'axios';
import Food from "./Food";
import Search from "./Search";

type MenuType = {
  _id: String,
  food_id: String,
  food_name: String,
  price: String,
  description: String,
  category: String,
  active: String,
  image: String,
  quantity: number
  onQuantityChange: (id: String, data: number) => void;
};

const MenuAPI = () => {
  const [search, setSearch] = useState('');
  const [foods, setFoods] = useState<MenuType[]>([]);

  const sendGetRequest = async () => {
    try {
      const response = await axios.get(
        'https://shielded-depths-40144.herokuapp.com/foods'
      );
      setFoods(response.data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const sendDeleteRequest = async () => {
    try {
      const response = await axios.delete(
        'https://shielded-depths-40144.herokuapp.com/foods/25'
      );

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const sendPostRequest = async () => {
    try {
      const response = await axios.post(
        'https://shielded-depths-40144.herokuapp.com/foods',
        {
          food_id: '25',
          food_name: 'Tacos',
          price: '8.00',
          description: 'A crispy or soft corn or wheat tortilla that is folded or rolled and stuffed with a mixture.',
          category: 'Mains',
          active: 'Yes',
          image: 'Tacos.jpg'
        }
      );

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const sendPutRequest = async () => {
    try {
      const response = await axios.put(
        'https://shielded-depths-40144.herokuapp.com/foods/25',
        {
          food_id: '25',
          food_name: 'Pasta',
          price: '10.00',
          description: 'Made from a mixture of flour, eggs, and water that is formed into different shapes and then boiled.',
          category: 'Mains',
          active: 'Yes',
          image: 'NoPicAv.png'
        }
      );

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  // Search for food by name
  const filterMenu = (name: string) => {
    if (name) {
      setSearch(name);
    } else {
      setSearch('');
    }
  };

  useEffect(() => {
    fetch('https://shielded-depths-40144.herokuapp.com/foods')
      .then((response) => response.json())

      .then((responseData) => {
        setFoods(responseData);

        console.log(responseData);
      });

    axios.get('https://shielded-depths-40144.herokuapp.com/foods').then((response) => {
      setFoods(response.data);
      console.log(response);
    });
    sendGetRequest();
  }, []);

  return (
    <div>
      {/* These will be in the admin page instead }
      <div className="center">
        <button onClick={sendPostRequest}>Add Food</button>
        <button onClick={sendPutRequest}>Update Food</button>
        <button onClick={sendDeleteRequest}>Delete Food</button>
      </div>      
      <br></br>*/}
      <Search filterMenu={filterMenu} />
      <h2>Starters</h2>
      <div className="food-items">
        {foods.filter((f) => f.food_name.toLowerCase().includes(search.toLowerCase()))
        .map((food) => (
          (food.category == "Starters") ? <Food food={food} key={food._id.toString()} /> : ""
        ))}
      </div>
      <h2>Mains</h2>
      <div className="food-items">
        {foods.filter((f) => f.food_name.toLowerCase().includes(search.toLowerCase()))
        .map((food) => (
          (food.category == "Mains") ? <Food food={food} key={food._id.toString()} /> : ""
        ))}
      </div>
      <h2>Curries</h2>
      <div className="food-items">
        {foods.filter((f) => f.food_name.toLowerCase().includes(search.toLowerCase()))
        .map((food) => (
          (food.category == "Curries") ? <Food food={food} key={food._id.toString()} /> : ""
        ))}
      </div>
      <h2>Desserts</h2>
      <div className="food-items">
        {foods.filter((f) => f.food_name.toLowerCase().includes(search.toLowerCase()))
        .map((food) => (
          (food.category == "Desserts") ? <Food food={food} key={food._id.toString()} /> : ""
        ))}
      </div>
      <h2>Beverages</h2>
      <div className="food-items">
        {foods.filter((f) => f.food_name.toLowerCase().includes(search.toLowerCase()))
        .map((food) => (
          (food.category == "Beverages") ? <Food food={food} key={food._id.toString()} /> : ""
        ))}
      </div>
    </div>

  );
};

export default MenuAPI;