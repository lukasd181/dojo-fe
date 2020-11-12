import HostNavBar from "HostSite/components/HostNavbar";
import HostCreateMatchPage from "HostSite/containers/HostCreateMatchPage";
import HostMain from "HostSite/containers/HostMain";
import React, { uesEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Switch, Route, useLocation } from "react-router-dom";


const HostLayout = () => {
  return (
    <div>
      <HostNavBar />
      <Switch>
        <Route exact path="/host/main" component={HostMain} />
        <Route exact path="/host/match/create" component={HostCreateMatchPage} />
      </Switch>
    </div>
  );
};

export default HostLayout;