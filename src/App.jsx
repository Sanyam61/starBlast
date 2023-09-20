import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import CustomCard from "./Components/CustomCard/CustomCard";
import RelavantProject from "./Components/RelavantProject/RelavantProject";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StargazeTeam from "./Components/StargazeTeam/StargazeTeam";

function App(props) {
  return (
    <>
      <div className="Main_App_Wrapper">
        <div className="Snap_Area">
          <CustomCard />
        </div>
        <div className="Snap_Area">
          <RelavantProject />
        </div>
        <div className="Snap_Area">
          <StargazeTeam />
        </div>
      </div>
      {/* <div style={{ padding: "100px 0" }}> */}
      {/* </div> */}
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
