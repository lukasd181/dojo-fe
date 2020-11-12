import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { modalAction } from "redux/actions/modal.action";
import { authAction } from "redux/actions/auth.action";
import { useHistory } from "react-router-dom";
import { routeAction } from "redux/actions/route.action";
import { fighterAction } from "redux/actions/fighter.action";

const LoginModal = () => {
  const history = useHistory();
  const currentUser = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);
  const show = useSelector((state) => state.modal.show);
  const [user, setUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const handleCloseLogin = () => {
    dispatch(modalAction.handleCloseModal());
  };

  useEffect(() => {
    if (isAuthenticated && !loading && currentUser) {
      console.log("userType", currentUser.userType)
      if (currentUser.userType == "fighter") {
        console.log("im here to login ");
        dispatch(routeAction.updateRedirectTo("/fighter/main"));
        history.push("/fighter/main");
      } else {
        dispatch(routeAction.updateRedirectTo("/host/main"));
        history.push("/host/main");
      }
    }
  }, [loading, isAuthenticated, currentUser]);
  const handleSubmit = () => {
    dispatch(authAction.login(user));
  };

  return (
    <div>
      <Modal show={show} onHide={() => handleCloseLogin()}>
        <div className="login-container">
          <div className="login-header">
            <div className="header-text">LOGIN</div>
          </div>
          <div className="login-body">
            <form
              className="login-form"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
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
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </label>
              <button className="login-submit" type="submit">
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LoginModal;
