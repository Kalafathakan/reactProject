import Quantity from './Quantity';
import axios from 'axios';
import { useState } from 'react';
import React from 'react';
type FoodProps = {
  food: {
    food_id: String,
    food_name: String,
    price: String,
    description: String,
    category: String,
    active: String,
    image: String,
    quantity: number
    onQuantityChange: (id: String, data: number) => void;
    MUpdateMenuItem: (selectedFoodId: String) => void;
  };
};



const FoodForAdmin = ({ food }: FoodProps  ) => {

  //const [foodForForm, setFoodForForm] = useState<FoodProps[]>([]);
  // const UpdateMenuItem = (mydata : String) => {
  //  // console.log(mydata)
  //  food.UpdateMenuItem(mydata)
  // }

  // const sendGetRequest = async (foodId : String) => {
  //   try {
  //     const response = await axios.get(
  //       `https://shielded-depths-40144.herokuapp.com/foods/${foodId}`
  //     );
  //     setFoodForForm(response.data);
  //     console.log(response.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <div className='food-box'>
      <div className='food-img'>
        <img src={`https://shielded-depths-40144.herokuapp.com/assets/images/${food.image}`} alt={`${food.food_name}`} className="img-responsive img-curve" height="auto" width="150px" />
      </div>
      <div className='food-details'>
        <h4>{food.food_name}</h4>
        <p className="food-price">${food.price}</p>
        <p className="food-desc">{food.description}</p>

        
        <button  className="btn btn-primary" onClick={() => food.MUpdateMenuItem(food.food_id)}   >Submit</button>
        {/* <a href="" className="menu-btn" onClick={() => UpdateMenuItem(food.food_id)}>Update</a> */}
        <a href="" className="menu-btn">Delete</a>
      </div>
    </div>
  );
};

export default FoodForAdmin;
