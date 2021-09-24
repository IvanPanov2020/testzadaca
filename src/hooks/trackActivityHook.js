import React, { useState, useRef } from "react";

const TrackActivityHook = (initialState = null) => {
  const [activity, setActivity] = useState(initialState);

  const handleStartTrackActivity = (newActivity) => {
    setActivity(newActivity);
  };

  return {
    activity,
    handleStartTrackActivity,
  };
};

export default TrackActivityHook;
