import React from 'react';
import Nastya from "../assets/images/IMG_9229.jpg";
const Feedback = () => {
  return (
    <div className="feedback-page">
      <p>
        <img src={Nastya} alt="Girl in a jacket" width="500" height="600"/>
        <span>My name is Marina. I came to the Netherlands in 2016.</span>
        {/* <img src="/images/IMG_9229.jpg" alt="Girl in a jacket" width="500" height="600"/>
        <span>My name is Marina. I came to thee Netehrlands in 2016.</span> */}
      </p>
    </div>
  );
};

export default Feedback;
