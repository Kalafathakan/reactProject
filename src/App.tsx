import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Bookings from './pages/Bookings';
import About from './pages/About';
import Footer from './pages/Footer';
import Navigation from './pages/Navigation';
import Orders from './pages/Orders';
import Reviews from './pages/Reviews';
import Deals from './pages/Deals';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import Thankyou from './pages/Thankyou';
import AuthContext from './context/AuthContext';
import { useState } from 'react';
import MyPage from './pages/MyPage';
import ProtectedRoute from './pages/ProtectedRoute';
import Admin from './pages/Admin';
import FormContext, { foodForFormType } from './context/AdminFormContext';

const App = () => {

  const userIsLoggedIn = () => {
    // user info can be loaded after refresh
    return !!window.localStorage.getItem('token'); // !! : cast to boolean
 }
  const [isLoggedIn, setIsLoggedIn] = useState(userIsLoggedIn());
  const login = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('token', '');
  };
  const food = {
    //formData:{ 
    _id: '',
    food_id: '',
    food_name: '',
    price: '',
    description: '',
    category: '',
    active: '',
    image: '',
    quantity: 0
   // }
  };
  
  type foodForFormType1 = {
    //formData:{ 
    _id: string,
    food_id: string,
    food_name: string,
    price: string,
    description: string,
    category: string,
    active: string,
    image: string,
    quantity: number
  //  onQuantityChange: (id: String, data: number) => void;
    //UpdateMenuItem: (selectedFoodId: String) => void;
   // }
  };

  const [formData, setFormData] = useState<foodForFormType1 >(food)

  const setMyData = (data:foodForFormType1) => {
    setFormData(data);
  };

  //const { _id, food_id, food_name, price, description, category,active,image,quantity} = formData;


  // const { } = formData

  return (
    <div>
       <AuthContext.Provider
        value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
      > 
      <FormContext.Provider value = {{ formData,setMyData } }> 
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='menu' element={<Menu />} />
            <Route path='bookings' element={<Bookings />} />
            <Route path='thankyou' element={<Thankyou />} />
            <Route path='orders' element={<Orders />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='about' element={<About />} />
            <Route path='deals' element={<Deals />} />
            <Route path='contact' element={<Contact />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route element={<ProtectedRoute />}>
            <Route path='/admin-menu' element={<Admin />} />
            <Route path='/mypage' element={<MyPage />} />
            </Route>
          </Routes>
          <Footer />
          </FormContext.Provider>
          </AuthContext.Provider>
    </div>
    
  );
};

export default App;