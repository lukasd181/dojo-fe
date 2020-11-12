import FighterNavbar from "FighterSite/components/FighterNavbar";
import FighterMain from "FighterSite/containers/FighterMain";
import SparringPage from "FighterSite/containers/SparringPage";
import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

const FighterLayout = () => {
  return (
    <div>
      <FighterNavbar />
      <Switch>
        <Route exact path="/fighter/main" component={FighterMain} />
        <Route exact path="/fighter/sparring" component={SparringPage} />
      </Switch>
    </div>
  );
};

export default FighterLayout;
