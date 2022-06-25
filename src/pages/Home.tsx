const Home = () => {

  return (

    <div className='page-style-hk'>
      <h1 id="topics-hk">Home</h1>
      <div id='homeInfo'>
        <div className="center">
          <h2>Welcome to Falcons Restaurant!</h2>
          <img id="homeLogo" src={require('../images/logo.png')} width="auto" height="auto" /><br />
          <div className="homeContent">
            <div className="homeContent2">
              <p>
                Since opening our doors in June 2022, we have always been fascinated by the variety of foods in countries around the world. Thus, we founded Falcons, a multicultural restaurant with something for everyone.

                We have hired the best chefs from the Toronto region and surrounding areas; using the restaurant to not only showcase our team's talent to our guests, but also showcase the individuals behind the ingredients.

                We're lucky to be located in an area where there are numerous people of various backgrounds.

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
          <p>205 Humber College Blvd, Etobicoke, ON M9W 6V3</p>
          <h3>Hours Of Operation</h3>
          <ul>
            <li>
              Monday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Noon - Midnight
            </li>
            <li>
              Tuesday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Noon - Midnight
            </li>
            <li>
              Wednesday &nbsp;    Noon - Midnight
            </li>
            <li>
              Thursday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Noon - Midnight
            </li>
            <li>
              Friday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    Noon - 1AM
            </li>
            <li>
              Saturday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Noon - 1AM
            </li>
            <li>
              Sunday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Noon - 11PM
            </li>
          </ul>
        </div>
      </div>
    </div>

  );
};

export default Home;
