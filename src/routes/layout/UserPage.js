import React from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Main from "PublicSite/Main";

const UserPage = () => {
  return (
    <div>
      <Switch>
        <Route path="/user/main" component={Main} />
      </Switch>
    </div>
  );
};

export default UserPage;
