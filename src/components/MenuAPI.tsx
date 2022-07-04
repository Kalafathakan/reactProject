import React, { useState, useEffect } from "react";
import axios from 'axios';
import Food from "./Food";
import Search from "./Search";
import Cart from './Cart';
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Drawer from '@mui/material/Drawer';

export type CartItemType = {
  food_id: string;
  food_name: string;
  price: number;
  description: string;
  category: string;
  active: string;
  image: string;
  quantity: number;
};

type MenuType = {
  _id: string,
  food_id: string,
  food_name: string,
  price: number,
  description: string,
  category: string,
  active: string,
  image: string,
  quantity: number
  handleAddToCart: (clickedFood: CartItemType) => void;
};

const MenuAPI = () => {
  const [search, setSearch] = useState('');
  const [foods, setFoods] = useState<MenuType[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

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

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((total: number, item) => total + item.quantity, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      // Check if the food is already in the cart
      const isItemInCart = prev.find(item => item.food_id === clickedItem.food_id);

      if (isItemInCart) {
        return prev.map(item =>
          item.food_id === clickedItem.food_id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // First time the food is added
      return [...prev, { ...clickedItem, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prev =>
      prev.reduce((total, item) => {
        if (item.food_id === id) {
          if (item.quantity === 1) return total;
          return [...total, { ...item, quantity: item.quantity - 1 }];
        } else {
          return [...total, item];
        }
      }, [] as CartItemType[])
    );
  };


  return (
    <div>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <button onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon />
          Cart
        </Badge>
      </button>
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
            (food.category == "Starters") ? <Food food={food} key={food._id.toString()} handleAddToCart={handleAddToCart} /> : ""
          ))}
      </div>
      <h2>Mains</h2>
      <div className="food-items">
        {foods.filter((f) => f.food_name.toLowerCase().includes(search.toLowerCase()))
          .map((food) => (
            (food.category == "Mains") ? <Food food={food} key={food._id.toString()} handleAddToCart={handleAddToCart} /> : ""
          ))}
      </div>
      <h2>Curries</h2>
      <div className="food-items">
        {foods.filter((f) => f.food_name.toLowerCase().includes(search.toLowerCase()))
          .map((food) => (
            (food.category == "Curries") ? <Food food={food} key={food._id.toString()} handleAddToCart={handleAddToCart} /> : ""
          ))}
      </div>
      <h2>Desserts</h2>
      <div className="food-items">
        {foods.filter((f) => f.food_name.toLowerCase().includes(search.toLowerCase()))
          .map((food) => (
            (food.category == "Desserts") ? <Food food={food} key={food._id.toString()} handleAddToCart={handleAddToCart} /> : ""
          ))}
      </div>
      <h2>Beverages</h2>
      <div className="food-items">
        {foods.filter((f) => f.food_name.toLowerCase().includes(search.toLowerCase()))
          .map((food) => (
            (food.category == "Beverages") ? <Food food={food} key={food._id.toString()} handleAddToCart={handleAddToCart} /> : ""
          ))}
      </div>
    </div>

  );
};

export default MenuAPI;