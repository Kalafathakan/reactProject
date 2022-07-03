import React, { Component, useState } from 'react'
import axios from 'axios';
import FormContext from '../context/FormContext';

type MenuType = {
    food:{
    _id: String,
    food_id: String,
    food_name: String,
    price: String,
    description: String,
    category: String,
    active: String,
    image: String,
    quantity: number
   // onQuantityChange: (id: String, data: number) => void;
   // UpdateMenuItem: (selectedFoodId: String) => void;
};
  };


  const MenuFormForAdmin = ({food}: MenuType) => {

    const [formData2, setFormData] = useState({
        food_id: `${food.food_id}`,
        food_name: `${food.food_name}`,
        price: `${food.price}`,
        description: `${food.description}`,
        category: `${food.category}`,
        image: `${food.image}`
      });

      const { food_id, food_name, price, description,category,image } = formData2;


      const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
      setFormData({ ...formData2, [e.target.name]: e.target.value });

      const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        let formValid = true;
   
    
        if (formValid) {
    
    
          let config = {
            headers: {
              'Content-Type': 'application/json',
            },
          };
    
          let data = {
            food_id: food_id,
            food_name: food_name,
            price: price,

            description: description,
            category: category,
            image: image
          };
          try {
            const response = await axios.put(
              `https://shielded-depths-40144.herokuapp.com/foods/${food.food_id}`,
              data,
              config
            );
    
          } catch (e: any) {
            console.log('error ', e.message);
          }
        }
      };

    

    return (
      <div>
       
     <div className="container mt-5 mb-5 w-100    ">
        <div className="modal-lg  mx-auto  " >
          <div className="modal-lg-dialog  ">
            <div className="modal-content rounded-5 shadow text-center bg-light bg-opacity-25">
              <div className="modal-header  ">
                <h2 className="mx-auto my-auto mt-5 mb-4 display-2 ">Sign Up</h2>
              </div>
              <div className="modal-body ">
                <form className="row justify-content-center " onSubmit={(e) => onSubmit(e)} noValidate>
                  <div className="col-6">
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control rounded-4" placeholder='Name'
                        name='name'
                        required
                        value={food_name}
                        onChange={(e) => onChange(e)} />
                      <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control rounded-4" placeholder='Email Address'
                        name='email'
                        value={price}
                        onChange={(e) => onChange(e)} />
                      <label htmlFor="email">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="password" className="form-control rounded-4" placeholder='Password'
                        name='password'

                        value={description}
                        onChange={(e) => onChange(e)} />
                      <label htmlFor="password">Password</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input type="password" className="form-control rounded-4" placeholder='Confirm Password'
                        name='password2'
                        value={category}
                        onChange={(e) => onChange(e)} />
                      <label htmlFor="password">Confrim Password</label>
                    </div>
                    <div className="col-9 mx-auto">
                    <button className="w-100 mb-2 p-3 btn btn-lg rounded-4 btn-primary rounded-pill" type="submit">Sign
                      up</button>
                      </div>
                    <div className="w-100"></div>
                    <small className="text-muted ">By clicking Sign up, you agree to the terms of
                      use.</small>
                    <div className="modal-footer mt-4">
                      <h3 className="mx-auto my-auto " >Already have an account?</h3>
                      <div className="w-100"></div>
                      <div className="col-9 mx-auto">
                      <a className="w-100 p-3 mt-2 btn btn-lg rounded-4 btn-primary border  mb-5 rounded-pill" href="/login" role="button">Sign in</a>
                      </div>
                      <div className="w-100"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
      </div>
    )
  }

  export default MenuFormForAdmin;