import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { hostAction } from "redux/actions/host.action";

const MeHostCard = () => {
  const meHost = useSelector((state) => state.host.host);
  const loading = useSelector((state) => state.host.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hostAction.getMeHost());
  }, []);
  return (
    <div>
      {meHost ? (
        <div className="me-host">
          <div className="me-host-header">
            <div className="me-host-body-right">
              <img src={meHost.creator.avatarUrl} width="100px" />
            </div>
            <div>
              <div className="me-host-name">{meHost.creator.name}</div>
              <div className="me-host-type">Host</div>
            </div>
          </div>
          <div className="me-host-body">
            <div className="me-host-body-left">
              <div className="me-host-club">Club Name: <span className="clubname"></span>{meHost.clubName}</div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default MeHostCard;
