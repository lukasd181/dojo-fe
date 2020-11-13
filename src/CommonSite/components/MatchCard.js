import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Button, Modal, Badge } from "react-bootstrap";

const MatchCard = ({ match }) => {
  const meFighter = useSelector((state) => state.fighter.meFighter);
  const currentUser = useSelector((state) => state.auth.user);
  const matchStatus = () => {
    if (match.status === "looking")
      return (
        <div className="match-card-status-is-looking badge badge-success">
          {match.status}
        </div>
      );
    else if (match.status == "ended")
      return (
        <div className="match-card-status-ended badge badge-dark">
          {match.status}
        </div>
      );
    else if (match.status == "cancelled")
      return (
        <div className="match-card-status-cancelled badge badge-danger">
          {match.status}
        </div>
      );
    else
      return (
        <div className="match-card-status-ongoing badge badge-info">
          {match.status}
        </div>
      );
  };
  const vsDisplay = (fighters) => {
    if (fighters.length == 0) {
      return (
        <div className="match-card-body-left d-flex align-items-center justify-content-center">
          <div>
            <div className="fighter-unknown-img">
              <img
                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0xiNsdDa-yMXgqwLL3sLyqaQVzCnGh3bB1A&usqp=CAU`}
              />
            </div>
            <div className="fighter-unknown-name">Looking</div>
          </div>

          <div className="match-card-vs">
            <div className="text-center vs">VS</div>
          </div>
          <div className="fighter-unknown">
            <div className="fighter-unknown-img">
              <img
                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0xiNsdDa-yMXgqwLL3sLyqaQVzCnGh3bB1A&usqp=CAU`}
              />
            </div>
            <div className="fighter-unknown-name">Looking</div>
          </div>
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
            {/* <div className="fighter-1-weight">{fighters[0].weight} kg</div>
            <div className="fighter-1-height">{fighters[0].height} cm</div> */}
          </div>
          <div className="match-card-vs">
            <div className="text-center vs">VS</div>
          </div>
          <div className="fighter-unknown">
            <div className="fighter-unknown-img">
              <img
                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0xiNsdDa-yMXgqwLL3sLyqaQVzCnGh3bB1A&usqp=CAU`}
              />
            </div>
            <div className="fighter-unknown-name">Looking</div>
          </div>
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
            {/* <div className="fighter-1-weight">{fighters[0].weight} kg</div>
            <div className="fighter-1-height">{fighters[0].height} cm</div> */}
          </div>
          <div className="match-card-vs">
            <div className="text-center vs">VS</div>
          </div>
          <div className="fighter-2">
            <div className="fighter-2-img">
              <img src={fighters[1].creator.avatarUrl} />
            </div>
            <div className="fighter-2-name">{fighters[1].creator.name}</div>
            {/* <div className="fighter-2-weight">{fighters[1].weight} kg</div>
            <div className="fighter-2-height">{fighters[1].height} cm</div> */}
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
                  Join +
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

export default MatchCard;
