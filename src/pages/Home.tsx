// import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Anya from "../assets/images/IMG_9229.jpg";

const Home = () => {
  // const [isEnabled, setIsEnabled] = useState<boolean>();
  // const showForm = () => setIsEnabled(!isEnabled);
  return (
    <div className="home-container">
      <div className="left-section">
        <div className="orange-line">
        </div>
        <img src={Anya} className="anna-picture" alt="Girl in a jacket"/>
      </div>
      <div className="right-section">
        <div className="content-home-page">
          <h1>
          </h1>
          <p>
            My name is Anna. I came to the Netherlands in 2015 with my husband, two kids and a dog.
          </p>
          <Button className="coaching-button" variant="contained">Request for coaching</Button>
        </div>
      </div>
    </div>

  );
};

export default Home;
