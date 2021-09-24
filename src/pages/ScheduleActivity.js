import React from "react";
import { Link } from "react-router-dom";
import "../styles/ScheduleActivity.css";

export default function ScheduleActivity() {
  return (
    <div className="main-sched-act">
      <Link to="/">
        <button className="back-btn">&#xd7;</button>
      </Link>
      <h2>Schedule your activity</h2>
      <div className="sa-logo">
        <div className="logo-text">
          Logo
          <p>SPRINTING</p>
        </div>
        <div className="logo-text">
          Logo <p>SURFING</p>
        </div>
        <div className="logo-text">
          Logo <p>WEIGHTS</p>
        </div>
        <div className="logo-text">
          Logo <p>HIKING</p>
        </div>
      </div>
      <div className="s-time">
        <p>How long do you want to do this activity?</p>
      </div>
      <div className="time">15min or 20min</div>
      <div className="pick-date">
        <p>When do you want to do this activity?</p>
        <div className="date">Pick a date , time or find a free slot </div>
      </div>
      <button className="schedule-bt">Schedule</button>
    </div>
  );
}
