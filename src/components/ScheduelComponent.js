import React from "react";
import "../styles/ScheduelComponetnt.css";
import { Link } from "react-router-dom";
import ScheduledActivitiesComponent from "./ScheduledActivitiesComponent";
import ScheduledActivities from "../pages/ScheduleActivity";
const ScheduelComponetnt = (props) => {
  return (
    <div>
      <div className="sche-activites">
        <div className="scheduled-title">Scheduled Activities</div>
        <div className="no-scheduled-activites-rezultat">
          You don’t have any activities scheduled yet
        </div>
        <ScheduledActivitiesComponent />

        <Link to="/schedule-activity">
          <button className="scheduled-btn">
            <img src={props.src} alt="logo" />
            <span>Schedule activity</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ScheduelComponetnt;
