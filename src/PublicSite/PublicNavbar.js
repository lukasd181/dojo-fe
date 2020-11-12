import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { modalAction } from "redux/actions/modal.action";
import { useHistory } from "react-router-dom";
const logo = require("../photos/LOGO/LOGO.png");

const PublicNavbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOpenLogin = () => {
    dispatch(modalAction.handleOpenModal());
  };

  return (
    <div className="private-nav">
      <div className="private-nav-container">
        <div className="private-nav-left-items">
          <div className="nav-logo">
            <img className="private-nav-logo" src={logo} width="70px" />
          </div>
        </div>
        <div className="private-nav-right-items">
          <button
            className="private-nav-signup-button"
            type="submit"
            onClick={(e) => history.push("/register")}
          >
            Create account
          </button>
          <button
            className="private-nav-login-button"
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              handleOpenLogin();
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default PublicNavbar;
