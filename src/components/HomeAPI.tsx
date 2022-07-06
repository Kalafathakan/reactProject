import React, { useState, useEffect, useContext, createContext } from "react";
import axios from 'axios';


type imagesType = {
    image_id: string,
    image: string
  };


const HomeAPI = () => {
  const [imgs, setImgs] = useState<imagesType[]>([]);
  var rowId = 0
  

  const sendGetRequest = async () => {
    try {
      const response = await axios.get(
        'https://shielded-depths-40144.herokuapp.com/images'
      );
      setImgs(response.data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
   

    axios.get('https://shielded-depths-40144.herokuapp.com/images').then((response) => {
      setImgs(response.data);
      console.log(response);
    });
    sendGetRequest();
  }, []);

  return (
    <div className="container">
      
      
      
        {imgs
          .map((img) => ( 
            ( img.image == "businessHours.jpg") ?

        <img src={`https://shielded-depths-40144.herokuapp.com/assets/images/${img.image}`}></img>: ""

          ))}

     
    </div>

  );
};

export default HomeAPI;