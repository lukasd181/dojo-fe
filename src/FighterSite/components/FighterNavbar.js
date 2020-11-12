import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import pic from "../../photos/LOGO/LOGO.png";
import { authAction } from "redux/actions/auth.action";

const FighterNavbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div className="private-nav">
      <div className="private-nav-container">
        <div className="private-nav-left-items">
          <div className="nav-logo">
            <img
              src={pic}
              className="private-nav-logo"
              width="70px"
              onClick={(e) => {
                history.push("/fighter/main");
              }}
            />
          </div>
        </div>
        <div className="private-nav-middle-items">
          <form className="private-nav-search">
            <input type="text" placeholder="search for host" />
          </form>
        </div>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              history.push("/fighter/sparring");
            }}
          >
            <button
              className="private-nav-login-button private-nav-sparring-button"
              type="submit"
            >
              Spar someone
            </button>
          </form>
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

export default FighterNavbar;
