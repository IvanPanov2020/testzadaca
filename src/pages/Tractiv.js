import React from "react";
import { Link } from "react-router-dom";
import TrackActivity from "./TrackActivity";
import "../styles/Tractiv.css";
import TailComponent from "../components/TailComponent";
import ScheduelComponetnt from "../components/ScheduelComponent";
import HistoryComponent from "../components/HistoryComponent";

const Tractiv = () => {
  return (
    <div className="main-body">
      <div className="header">
        <span className="header-logo"></span>
      </div>

      <div className="main-container">
        <div className="main-title">Track Your Activity</div>
        <div className="tail-container">
          <TailComponent
            src="http://localhost:3000/assets/surfing.png"
            src1="http://localhost:3000/assets/icn_surfing.png"
            title="Surfing"
            subTitle="OCEAN BEACH"
          />
          <TailComponent
            src="http://localhost:3000/assets/hiking.png"
            src1="http://localhost:3000/assets/icn_hiking.png"
            title="Hiking"
            subTitle="TORREY PINES"
          />
          <TailComponent
            src="http://localhost:3000/assets/weights.png"
            src1="http://localhost:3000/assets/icn_weights.png"
            title="Weights"
            subTitle="Option3 "
          />
          <TailComponent
            src="http://localhost:3000/assets/spinning.png"
            src1="http://localhost:3000/assets/icn_spin.png"
            title="Spinning"
            subTitle="Option4 "
          />
        </div>
        <ScheduelComponetnt src="http://localhost:3000/assets/icn_plus.png" />
        <HistoryComponent />
      </div>
    </div>
  );
};
export default Tractiv;
