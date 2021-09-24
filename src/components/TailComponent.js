import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/TailComponent.css";
import { useSelector, useDispatch } from "react-redux";

const TailComponent = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const routeChange = () => {
    const path = "/track-activity";
    dispatch({ type: "activites/StartActivite", payload: { activity: props } });
    history.push(path);
  };
  return (
    <div>
      <div className="container" onClick={() => routeChange()}>
        <div className="container-pic">
          <img className="img-fluid" src={props.src} alt="pic" />
        </div>
        <div className="container-logo">
          <img src={props.src1} alt="logo" />
        </div>
        <div className="container-title">{props.title}</div>
        <div className="container-second-title">{props.subTitle}</div>
      </div>
    </div>
  );
};
export default TailComponent;
