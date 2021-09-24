import React, { useEffect } from "react";
import "../styles/TrackActivity.css";
import { Link } from "react-router-dom";
import useTimer from "../hooks/useTimer";
import { useSelector } from "react-redux";
import { formatTime } from "../utils";

export default function TrackActivity() {
  const selectedActiveActivite = useSelector((state) => state.activeActivite);
  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
  } = useTimer(0);

  useEffect(() => {
    if (!isActive && !isPaused) {
      handleStart();
    }
  });

  return (
    <div className="backgraud">
      <Link to="/">
        <div className="back-btn">&#x3c;</div>
      </Link>
      <p className="title">CURRENT ACTIVITY</p>
      <div class="activity-logo">
        <img
          src={selectedActiveActivite.src1}
          alt="logo"
          className="img-logo"
        />
      </div>
      <div class="activiti-fromtrack">{selectedActiveActivite.title}</div>
      <div class="stopwach">
        <span className="stopwach-timer">
          {formatTime(timer)}
          <p>MINUTES</p>
        </span>
      </div>

      <h3>Activity Tracking In Progress…</h3>
      <div class="blur-btn">
        <button className="stop-btn" onClick={handlePause}></button>
      </div>
    </div>
  );
}
