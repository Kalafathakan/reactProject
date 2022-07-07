import React, { useState, useEffect, useContext, createContext } from "react";
import axios from 'axios';


type aboutType = {
    about_id: string,
    image: string,
    title: string,
    name: string
  };


const AboutAPI = () => {
  const [about, setAbout] = useState<aboutType[]>([]);
  var rowId = 0
  

  const sendGetRequest = async () => {
    try {
      const response = await axios.get(
        'https://shielded-depths-40144.herokuapp.com/about'
      );
      setAbout(response.data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
   

    axios.get('https://shielded-depths-40144.herokuapp.com/about').then((response) => {
      setAbout(response.data);
      console.log(response);
    });
    sendGetRequest();
  }, []);

  return (
    <div className='page-style-hk'>
      <h1 id="topics-hk">About Us</h1>
      <div className="center">
        <p><b>The Development Team</b></p>
        <br></br>
        <div className="persons">

        {about
        .map((ab) => (

          <div className='person'>
            <img id='pic' src={`https://shielded-depths-40144.herokuapp.com/assets/images/${ab.image}`}></img>
            <p id='name'>{ab.name}</p>
            <p id='description'>{ab.title}</p>
          </div>
          

        ))}

          {/* <div className='person'>
            <img id='pic' src={require('../images/defaultpic.jpg')}></img>
            <p id='name'>Zafer Hakan Kalafat</p>
            <p id='description'>Team Lead</p>
          </div>

          <div className='person'>
          <img id='pic' src={require('../images/defaultpic.jpg')}></img>
            <p id='name'>Guray Demirezen</p>
            <p id='description'>Back-End Developer</p>
          </div>

          <div className='person'>
          <img id='pic' src={require('../images/defaultpic.jpg')}></img>
            <p id='name'>Vishnu Pillai</p>
            <p id='description'>Full Stack Developer</p>
          </div>

          <div className='person'>
          <img id='pic' src={require('../images/defaultpic.jpg')}></img>
            <p id='name'>Nicholas Keller-Sedan</p>
            <p id='description'>Front-End Developer</p>
          </div>

          <div className='person'>
          <img id='pic' src={require('../images/defaultpic.jpg')}></img>
            <p id='name'>Oreoluwa Lawal</p>
            <p id='description'>Front-End Developer</p>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default AboutAPI;