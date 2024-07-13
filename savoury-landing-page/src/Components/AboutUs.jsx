import React from "react";
import Ticker from "framer-motion-ticker";
import chef1 from "../Images/chef1.jpg";
import chef2 from "../Images/chef2.jpg";
import chef3 from "../Images/chef3.jpg";
import chef4 from "../Images/chef4.jpg";
import chef5 from "../Images/chef5.jpg";
import chef6 from "../Images/chef6.jpg";
import { motion } from 'framer-motion';

const AboutUs = () => {
  const images = [chef1, chef2, chef3, chef4, chef5, chef6];

  return (
    <div className="aboutContainer">
      <h2>About Us</h2>
      <div className="about-content-container">
        <motion.div 
            className="sectionOne"
            initial={{x:'-100vw'}}
            animate={{x:0}}
            transition={{type:'spring',stiffness:100,delay:1,duration:1}}        
        >
          <h1 className="head">
            Savory-Where
            <br /> Flavor Meets Artistry.
          </h1>
          <p className="text">
            Introducing Savory, a place where every dining ecperience is a
            gastronomic festival of taste and exceptional cooking skill.
            Utilizing fresh ingredients sourced locally, our chefs skillfully
            create each delicacy to deliver a meal you will always remember.
            Embrace the taste sensation at Savory, a banquet for your senses.
            Our chefs craft each dish using fresh, locally-sourced ingredients
            to bring you an unforgettable dining experience. From our cozy
            ambiance to our impeccable service, we strive to make every visit
            special. Join us at Savoury and indulge in a feast for the senses.
          </p>
          <motion.button
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
          >
            Know More >>
          </motion.button>
        </motion.div>
        <motion.div 
            initial={{x:'100vw'}}
            animate={{x:0}}
            transition={{type:'spring',stiffness:100,delay:1}}
            className="sectionTwo"
        >
          <Ticker duration={20} className="ticker">
            {images.map((src, index) => (
              <img
                className="img"
                key={index}
                src={src}
                alt={`Image ${index}`}
                style={{
                  height: "590px",
                  width: "500px",
                  objectFit: "cover",
                  margin:'2px'
                }}
              />
            ))}
          </Ticker>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
