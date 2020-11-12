import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Register from "PublicSite/Register";
import { useSelector } from "react-redux";
import PrivateRoute from "routes/PrivateRoute";
import VistorPage from "../PublicSite/VisitorPage";
import CreateFighterProfile from "PublicSite/CreateFighterProfile";
import CreateHostProfile from "PublicSite/CreateHostProfile";
import FighterLayout from "routes/layout/FighterLayout";
import HostLayout from "routes/layout/HostLayout";

const FourOhFour = () => {
  return <div>404</div>;
};
const Routes = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div>
      <Switch>
        <Route exact path="/" component={VistorPage} />
        <Route exact path="/register" component={Register} />
        <Route
          exact
          path="/register/fighter"
          component={CreateFighterProfile}
        />
        <Route exact path="/register/host" component={CreateHostProfile} />
        <PrivateRoute path="/fighter" component={FighterLayout} />
        <PrivateRoute path="/host" component={HostLayout} />

        <Route component={FourOhFour} />
      </Switch>
    </div>
  );
};

export default Routes;
