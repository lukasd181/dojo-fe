import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Button, Modal, Badge } from "react-bootstrap";

const MatchCard = ({ match }) => {
  const meFighter = useSelector((state) => state.fighter.meFighter);

  return (
    <div>
      {meFighter ? (
        <div className="match-card">
          <div className="match-card-header">
            <div className="match-card-host">
      <div className="match-card-host-name">Hosted by {match.host.creator.name}</div>
            </div>
            <div className="match-card-status">
              <Badge pill variant="success">
                looking
              </Badge>
            </div>
          </div>
          <div className="match-card-body">
            <div className="match-card-col-1">
              <img
                className="match-card-img f1"
                src={meFighter.creator.avatarUrl}
                width="200px"
              />
            </div>
            <div className="match-card-col-2">
              <div className="match-card-fighter-name fighter-1">
                {meFighter.creator.name}
              </div>
            </div>
            <div className="match-card-col-3">
              <div className="text-vs">VS</div>
              <div className="match-card-gender">
                <Badge variant="dark">{match.gender}</Badge>
              </div>
              <div className="match-card-division">
                <Badge variant="dark">{match.division}</Badge>
              </div>
            </div>

            <div className="match-card-col-4">
                <div></div>
              <div className="match-card-fighter-name fighter-2">Dog</div>
            </div>
            <div className="match-card-col-5">
              <img
                className="match-card-img f2"
                src={meFighter.creator.avatarUrl}
                width="200px"
              />
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default MatchCard;
