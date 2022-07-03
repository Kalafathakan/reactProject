import React, { Component, useContext, useState } from 'react'
import axios from 'axios';
import FormContext from '../context/AdminFormContext';

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

  type updateDeleteType = {

    updateFood : (id:string) => void;
    deleteFood: (id:string) => void;
  }


  const MenuFormForAdmin = ({updateFood,deleteFood }: updateDeleteType) => {
    const fr = useContext(FormContext)
    

    const [formData2, setFormData] = useState({
        food_id: '',
        food_name: '',
        price: '',
        description: '',
        category: '',
        image: ''
      });

      const { food_id, food_name, price, description,category,image } = formData2;


      const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
      setFormData({ ...formData2, [e.target.name]: e.target.value });
     
      const onChange2 = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
      setFormData({ ...formData2, [e.target.name]: e.target.value });

      const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        let formValid = true;
   
    
        // if (formValid) {
    
    
        //   let config = {
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //   };
    
        //   let data = {
        //     food_id: food_id,
        //     food_name: food_name,
        //     price: price,

        //     description: description,
        //     category: category,
        //     image: image
        //   };
        //   try {
        //     const response = await axios.put(
        //       `https://shielded-depths-40144.herokuapp.com/foods/${food.food_id}`,
        //       data,
        //       config
        //     );
    
        //   } catch (e: any) {
        //     console.log('error ', e.message);
        //   }
        // }
      };

    

    return (
      <div>
       
     <div className="container mt-5 mb-5 w-100"  >
        <div className="modal-lg  mx-auto  " >
          <div className="modal-lg-dialog  ">
            <div className="modal-content rounded-5 shadow text-center bg-light bg-opacity-25">
              <div className="modal-header  ">
                <h2 className="mx-auto my-auto mt-5 mb-4 display-2 ">Update or Create Food</h2>
              </div>
              <div className="modal-body ">
                <form className="row justify-content-center " onSubmit={(e) => onSubmit(e)} noValidate>
                  <div className="col-6">
                  <div className="form-floating mb-3">
                      <input type="text" className="form-control rounded-4" placeholder='Food ID'
                        name='id'
                        required
                        value={`${fr.formData.food_id}`}
                        onChange={(e) => onChange(e)} />
                      <label htmlFor="id">Food ID</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control rounded-4" placeholder='Food Name'
                        name='name'
                        required
                        value={`${fr.formData.food_name}`}
                        onChange={(e) => onChange(e)} />
                      <label htmlFor="name">Food Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control rounded-4" placeholder='Price'
                        name='price'
                        value={`${fr.formData.price}`}
                        onChange={(e) => onChange(e)} />
                      <label htmlFor="price">Price</label>
                    </div>
                    <div className="form-floating mb-3">
                      <textarea   className="form-control rounded-4" placeholder='Description'
                        style={{height: '150px'}}
                        name='description'

                        value={`${fr.formData.description}`}
                        onChange={(e) => onChange2(e)} > </textarea>
                      <label htmlFor="description">Description</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input type="text" className="form-control rounded-4" placeholder='Category'
                        name='category'
                        value={`${fr.formData.category}`}
                        onChange={(e) => onChange(e)} />
                      <label htmlFor="category">Category</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control rounded-4" placeholder='Image'
                        name='image'
                        value={`${fr.formData.image}`}
                        onChange={(e) => onChange(e)} />
                      <label htmlFor="image">Image</label>
                    </div>
                    <div className="col-9 mx-auto">
                    <button className="w-100 mb-2 p-3 btn btn-lg rounded-4 btn-warning rounded-pill" onClick={() =>updateFood(`${fr.formData.food_id}`) } type="submit">Update
                      </button>
                      </div>
                      <div className="col-9 mx-auto">
                    <button className="w-100 mb-2 p-3 btn btn-lg rounded-4 btn-success rounded-pill" onClick={() =>deleteFood(`${fr.formData.food_id}`) } type="submit">Create
                      </button>
                      </div>
                    <div className="w-100"></div>
                    
                    
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