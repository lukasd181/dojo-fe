import React, { useEffect } from "react";
import "App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'semantic-ui-css/semantic.min.css'
import "antd/dist/antd.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "redux/actions/auth.action";
import { ClipLoader } from "react-spinners";


function App() {
  const dispatch = useDispatch();
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken && accessToken !== "undefined") {
      dispatch(authAction.getCurrentUser(accessToken));
    } else {
      dispatch(authAction.logout());
    }
  }, [dispatch]);
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
