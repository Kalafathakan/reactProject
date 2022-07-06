import axios from 'axios';
import React, { useState, useEffect } from "react";

type ImagesProps = {
  image_id: string,
  image: string
};

const Home = ({image}: ImagesProps) => {
  const [getImage, setImage] = useState<ImagesProps[]>([]);

  const sendGetRequest = async () => {
    try {
      const response = await axios.get(
        'https://shielded-depths-40144.herokuapp.com/images'
      );
      setImage(response.data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    sendGetRequest();
  }, []);


  return (

    <div className='page-style-hk'>
      <h1 id="topics-hk">Home</h1>
      <div id='homeInfo'>
        <div className="center">
          <h2>Welcome to Falcons Restaurant!</h2>
          <div className="homeContent">
            <div className="homeContent2">
              <div className="homeImg">
              <img id="homeLogo" src={require('../images/logo.png')} width="auto" height="auto" /><br />
              </div>
              <br></br><br></br>
              <p id="home-intro">
               Falcons, a multicultural restaurant with something for everyone.
               <br></br><br></br>
                We have hired the best chefs from the Toronto region and surrounding areas; using the restaurant to not only showcase our team's talent to our guests, but also showcase the individuals behind the ingredients.
                <br></br><br></br>
                We're lucky to be located in an area where there are numerous people of various backgrounds.
                <br></br><br></br>
                Our team will always be on hand to assist in enhancing our guests' experience and satisfying your cravings.
              </p>
            </div>
            <div className="homeContent3">
              <video id="homeVideo" controls autoPlay loop>
                <source src={require('../videos/Food.mp4')} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <hr />
        <div id='addressInfo'>
          <h3>Address</h3>
          <p>205 Humber College Blvd, Etobicoke, ON M9W 6V3</p><hr></hr>
          <div id="homeimg-div">
          
          <img id='home-img' src={`https://shielded-depths-40144.herokuapp.com/images/1${image}`}></img>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Home;
