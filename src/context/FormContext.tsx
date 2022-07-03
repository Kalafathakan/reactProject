import { createContext } from 'react';


export type foodForFormType = {
    formData:{ 
    _id: String,
    food_id: String,
    food_name: String,
    price: String,
    description: String,
    category: String,
    active: String,
    image: String,
    quantity: number
  //  onQuantityChange: (id: String, data: number) => void;
    //UpdateMenuItem: (selectedFoodId: String) => void;
    }
    setMyData: (data: foodType) => void;
   
  };

  type foodType = {
    _id: String,
    food_id: String,
    food_name: String,
    price: String,
    description: String,
    category: String,
    active: String,
    image: String,
    quantity: number
  }

// export type FormContextType = {

//     setData:(data: foodForFormType) => void
// }

const food = {
    formData:{ 
    _id: '',
    food_id: '',
    food_name: '',
    price: '',
    description: '',
    category: '',
    active: '',
    image: '',
    quantity: 0
    }
  };


const FormContext = createContext<foodForFormType | null >(null)

export default FormContext