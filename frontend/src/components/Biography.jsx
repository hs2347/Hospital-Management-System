import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
         
          <p>
          Welcome to Care & Cure, your trusted partner in health and wellness. We are dedicated to providing exceptional medical 
          care and comprehensive treatment solutions tailored to meet the unique needs of each patient.
           Our mission is to deliver compassionate care combined with innovative cures,
           ensuring the highest standards of health for our community.
      
          </p>
    
        
        </div>
      </div>
    </>
  );
};

export default Biography;