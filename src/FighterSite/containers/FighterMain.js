import MatchFeed from "FighterSite/components/MatchFeed";
import MeFighterInfoCard from "FighterSite/components/MeFighterInfoCard";
import SparringParnerList from "FighterSite/components/SparringParnerList";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fighterAction } from "redux/actions/fighter.action";
import { authAction } from "redux/actions/auth.action";
import DojoPagination from "CommonSite/components/MatchPagination";
import FighterNavbar from "FighterSite/components/FighterNavbar";
import SparringRequestList from "FighterSite/components/SparringRequestList";
const FighterMain = () => {
  return (
    <div>
      <div className="fighter-main-container avoidNav">
        <div className="fighter-main-col-1">
          <MeFighterInfoCard />
          <SparringRequestList />
        </div>
        <div className="fighter-main-col-2">
          <MatchFeed />
        </div>
        {/* <div className="fighter-main-col-3 d-none d-xl-block">
          <SparringParnerList />
        </div> */}
      </div>
    </div>
  );
};

export default FighterMain;
