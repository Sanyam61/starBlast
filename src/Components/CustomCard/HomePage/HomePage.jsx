import React from "react";
import "../HomePage/HomePage.scss";
import HeaderBar from "../../HeaderBar/HeaderBar";
import Star from "../../../assets/images/BigStar.png";
import { motion } from "framer-motion";
import mic from "../../../assets/images/Mic.png";
import search from "../../../assets/images/Search.png";

function HomePage(props) {
  return (
    <>
      <div className="home_page_wrapper">
        <HeaderBar />
        <div className="circle_one">
          <div className="star_one"></div>
        </div>
        <div className="circle_two"></div>
        <div className="circle_three">
          <motion.img
            animate={{ y: "-94%", x: "-50%" }}
            initial={{ y: "-60%", x: "-50%" }}
            transition={{ duration: 1, delay: 2 }}
            src={Star}
          />
        </div>
        <motion.div
          initial={{ y: "40%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="content_wrapper"
        >
          <h3>Gaze upon the stars, together</h3>
          <p>Imagine your dream product, and see how it might come true</p>
          <motion.div
            animate={{ y: "-20%", x: "0%" }}
            initial={{ y: "240%", x: "0%" }}
            transition={{ duration: 1, delay: 2 }}
          >
            <div className="search_bar_wrapper">
              <div className="input_box_wrapper">
                <img src={mic} className="mic"/>
                <img src={search} className="search"/>
                <input />
              </div>
            </div>
            <div className="Try_Btn_Wrapper">
              <button className="Try_Wrapper">Try Now</button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default HomePage;
