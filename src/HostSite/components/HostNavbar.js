import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import pic from "../../photos/LOGO/LOGO.png";
import { authAction } from "redux/actions/auth.action";
import { routeAction } from "redux/actions/route.action";
const HostNavBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className="private-nav">
      <div className="private-nav-container">
        <div className="private-nav-left-items">
          <div className="nav-logo">
            <img src={pic} className="private-nav-logo" width="70px" />
          </div>
        </div>
        <div className="private-nav-middle-items">
          <button
            className="private-nav-login-button"
            type="submit"
            onClick={(e) => {
              dispatch(routeAction.updateRedirectTo("/host/main"));
              history.push("/host/match/create");
            }}
          >
            create match
          </button>
        </div>
        <div className="private-nav-right-items">
          <button
            className="private-nav-login-button"
            type="submit"
            onClick={(e) => {
              dispatch(authAction.logout());
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default HostNavBar;
