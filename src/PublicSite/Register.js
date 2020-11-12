import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { userAction } from "redux/actions/user.action";
import { routeAction } from "redux/actions/route.action";

const logo = require("../photos/LOGO/LOGO.png");

const Register = () => {
  const loading = useSelector((state) => state.user.loading);
  const currentUser = useSelector((state) => state.user.currentUser);
  const history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
    avatarUrl: "",
    userType: "",
  });
  const handleSubmit = (user) => {
   
    dispatch(userAction.createUser(user));
  };

  useEffect(() => {
    if (!loading && currentUser) {
      if (user.userType == "fighter") {
        history.push("/register/fighter");
        dispatch(routeAction.updateRedirectTo("/register/fighter"));
      } else {
        history.push("/register/host");
        dispatch(routeAction.updateRedirectTo("/register/host"));
      }
    }
  }, [loading, currentUser]);

  return (
    <div className="background">
      <div className="register-container">
        <div className="register-area">
          <div className="register-logo">
            <img src={logo} width="200px" />
          </div>
          <form
            className="register-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(user);
            }}
          >
            <label>
              Nickname
              <input
                type="text"
                name="name"
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </label>
            <label>
              Email Address
              <input
                type="email"
                name="email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </label>
            <label>
              Password
              <input
                type="password"
                name="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </label>
            <label>
              ImageUrl
              <input
                type="text"
                name="name"
                onChange={(e) =>
                  setUser({ ...user, avatarUrl: e.target.value })
                }
              />
            </label>
            <div className="register-as">
              <button
                className="submit-as-fighter"
                type="submit"
                onClick={(e) => {
                  setUser({ ...user, userType: "fighter" });
                }}
              >
                BECOME A FIGHTER
              </button>
              <button
                className="submit-as-host"
                type="submit"
                onClick={(e) => setUser({ ...user, userType: "host" })}
              >
                BECOME A HOST
              </button>
            </div>

            <div className="register-agreement">
              By signing up to our service, you agree to our{" "}
              <span>Terms & Conditions</span> and <span>Privacy Policy</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
