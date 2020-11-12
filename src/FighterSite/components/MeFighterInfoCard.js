import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fighterAction } from "redux/actions/fighter.action";

const MeFighterInfoCard = () => {
  const meFighter = useSelector((state) => state.fighter.meFighter);
  const loading = useSelector((state) => state.fighter.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fighterAction.getOwnFighter());
  }, []);
  return (
    <div>
      <div>ME</div>
      {meFighter ? (
        <div className="me-fighter">
          <div className="me-fighter-left">
            <div className="me-fighter-name">{meFighter.creator.name}</div>
            <div className="me-fighter-form">{meFighter.forms[0]}</div>
            <div className="me-fighter-division">
              Your division: {meFighter.division}
            </div>

           
            <div className="me-fighter-stance">
              favorite stance: {meFighter.stance}
            </div>
            <div className="Stats">
              Your stats
              <div className="me-fighter-height">
                height: {meFighter.height}
              </div>
              <div className="me-fighter-weight">
                weight: {meFighter.weight}
              </div>
              <div className="me-fighter-matchesAttended">
                Matches: {meFighter.matchesAttended}
              </div>
            </div>
          </div>
          <div className="me-fighter-right">
            <img
              className="me-fighter-imageUrl"
              src={meFighter.creator.avatarUrl}
            />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default MeFighterInfoCard;
