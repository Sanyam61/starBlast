import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import CustomCard from "./Components/CustomCard/CustomCard";
import RelavantProject from "./Components/RelavantProject/RelavantProject";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StargazeTeam from "./Components/StargazeTeam/StargazeTeam";

function App(props) {
  return (
    <>
      <CustomCard />
      <RelavantProject />
      <StargazeTeam />
      {/* <div className="star_wrapper_box">
      <div className="component_box"></div>
        <div class="sky">
          <div class="star"></div>
        </div>
      <div className="component_box"></div>
    </div> */}
    </>
  );
}

export default App;
