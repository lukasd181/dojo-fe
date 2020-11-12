import MatchFeed from "FighterSite/components/MatchFeed";
import HostNavBar from "HostSite/components/HostNavbar";
import MeHostCard from "HostSite/components/MeHostCard";
import React from "react";

const HostMain = () => {
  return (
    <div>
      <div className="host-main">
        <div className="host-main-col-1">
          <MeHostCard />
        </div>
        <div className="host-main-col-2">
          <MatchFeed />
        </div>
        <div className="host-main-col-3"></div>
      </div>
    </div>
  );
};

export default HostMain;
