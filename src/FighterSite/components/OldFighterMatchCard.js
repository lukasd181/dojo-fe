import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

const FighterMatchCard = ({ match }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const meFighter = useSelector((state) => state.fighter.meFighter);
  const matchStatus = () => {
    if (match.status === "looking")
      return <div className="match-card-status-is-looking">{match.status}</div>;
    else if (match.status == "ended")
      return <div className="match-card-status-ended">{match.status}</div>;
    else if (match.status == "cacelled")
      return <div className="match-card-status-cancelled">{match.status}</div>;
    else
      return (
        <div className="match-card-status-not-looking">{match.status}</div>
      );
  };
  const vsDisplay = (fighters) => {
    if (fighters.length == 0) {
      return (
        <div className="match-card-body-left">
          <div className="fighter-1-unknown">Looking</div>
          <div className="match-card-vs">
            <div className="text-center">VS</div>
          </div>
          <div className="fighter-2-unknown">Looking</div>
        </div>
      );
    } else if (fighters.length == 1) {
      return (
        <div className="match-card-body-left">
          <div className="fighter-1">
            <div className="fighter-1-img">
              <img src={fighters[0].creator.avatarUrl} />
            </div>
            <div className="fighter-1-name">{fighters[0].creator.name}</div>
            <div className="fighter-1-weight">{fighters[0].weight} kg</div>
            <div className="fighter-1-height">{fighters[0].height} cm</div>
          </div>
          <div className="match-card-vs">
            <div className="text-center">VS</div>
          </div>
          <div className="fighter-2-unknown">Looking</div>
        </div>
      );
    } else {
      return (
        <div className="match-card-body-left">
          <div className="fighter-1">
            <div className="fighter-1-img">
              <img src={fighters[0].creator.avatarUrl} />
            </div>
            <div className="fighter-1-name">{fighters[0].creator.name}</div>
            <div className="fighter-1-weight">{fighters[0].weight} kg</div>
            <div className="fighter-1-height">{fighters[0].height} cm</div>
          </div>
          <div className="match-card-vs">
            <div className="text-center">VS</div>
          </div>
          <div className="fighter-2">
            <div className="fighter-2-img">
              <img src={fighters[1].creator.avatarUrl} />
            </div>
            <div className="fighter-2-name">{fighters[1].creator.name}</div>
            <div className="fighter-2-weight">{fighters[1].weight} kg</div>
            <div className="fighter-2-height">{fighters[1].height} cm</div>
          </div>
        </div>
      );
    }
  };
  return (
    <div>
      <div className="match-card">
        <div className="match-card-header">
          <div className="match-card-header-left">
            <div className="match-card-host-name">
              host: {match.host.creator.name}
            </div>
            <div className="match-card-created-time">
              {moment(match.createdAt).fromNow()}
            </div>
          </div>
          <div className="match-card-division-in-header">
            <div
              className="match-card-match-info-header"
              style={{ textTransform: "capitalize" }}
            >
              {match.gender} {match.division}
            </div>
          </div>

          <div className="match-card-header-right">{matchStatus()}</div>
        </div>
        <div className="match-card-body">
          {vsDisplay(match.fighters)}
          <div className="match-card-body-middle">
            <div className="match-card-match-info">
              <div className="match-card-match-form">{match.form}</div>
              <div>Rounds: {match.rounds}</div>
              <div>Round Durarion: {match.roundDuration} min</div>
              <div>Location: {match.location}</div>
              <div>Time Happen: {moment(match.timeHappen).format("LLL")}</div>
            </div>
          </div>
          {currentUser && currentUser.userType == "fighter" ? (
            <div className="match-card-body-right">
              {match.status == "looking" ? (
                <button className="request-join" type="button">
                  Join
                </button>
              ) : (
                "Filled"
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default FighterMatchCard;
