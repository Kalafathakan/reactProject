import Quantity from './Quantity';
import axios from 'axios';
import { useState } from 'react';
import React from 'react';
type FoodProps = {
  //food: {
    food_id: String,
    food_name: String,
    price: String,
    description: String,
    category: String,
    active: String,
    image: String,
    quantity: number
  //  onQuantityChange: (id: String, data: number) => void;
    UpdateMenuItem: (selectedFoodId: String) => void;
//  };
};

type myf = {
  UpdateMenuItem: (selectedFoodId: String) => void;
}


const FoodForAdmin = ({ food_id,food_name,price,UpdateMenuItem ,image,description}: FoodProps,   ) => {

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
        <img src={`https://shielded-depths-40144.herokuapp.com/assets/images/${image}`} alt={`${food_name}`} className="img-responsive img-curve" height="auto" width="150px" />
      </div>
      <div className='food-details'>
        <h4>{food_name}</h4>
        <p className="food-price">${price}</p>
        <p className="food-desc">{description}</p>

        
        <button  className="btn btn-primary" onClick={() => UpdateMenuItem("5")}   >Submit</button>
        {/* <a href="" className="menu-btn" onClick={() => UpdateMenuItem(food.food_id)}>Update</a> */}
        <a href="" className="menu-btn">Delete</a>
      </div>
    </div>
  );
};

export default FoodForAdmin;
