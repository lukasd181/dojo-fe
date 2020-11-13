import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { div, Button, Badge } from "react-bootstrap";
import { partnershipAction } from "redux/actions/partnership.action";
const FighterCard = ({ fighter, index }) => {
  const dispatch = useDispatch();
  const fighterLoading = useSelector((state) => state.partner.fighterLoading);
  const partnerStatus = useSelector((state) => state.partner.status);
  const partnerLoading = useSelector((state) => state.partner.loading);
  const meFighter = useSelector((state) => state.fighter.meFighter);
  const [buttonClicked, setButtonClicked] = useState(false);

  //   console.log("meFighter", meFighter, "fighter", fighter);
  const request = { from: meFighter._id, to: fighter._id };
  const handleStatusButton = (relationship) => {
    if (relationship === "Spar") {
      return (
        <Button
          variant="danger"
          onClick={(e) => {
            setButtonClicked(true);
            dispatch(partnershipAction.createSparringRequest(request));
            dispatch(
              partnershipAction.getStatus(fighter._id, meFighter._id, index)
            );
          }}
        >
          Spar
        </Button>
      );
    } else if (relationship === "Cancel Request") {
      return (
        <Button
          variant="warning"
          onClick={(e) => {
            setButtonClicked(true);
            dispatch(
              partnershipAction.cancelSparRequest(meFighter._id, fighter._id)
            );
            dispatch(
              partnershipAction.getStatus(fighter._id, meFighter._id, index)
            );
          }}
        >
          {relationship}
        </Button>
      );
    } else {
      return <Button variant="">Partners</Button>;
    }
  };
  useEffect(() => {
    if (fighter)
      dispatch(partnershipAction.getStatus(fighter._id, meFighter._id));
  }, []);
  return (
    <div>
      <div className="spar-card">
        <div className="d-flex justify-content-between">
          <Badge variant="secondary">{fighter.forms[0]}</Badge>
          <div className="fighter-div-division">{fighter.division}</div>
        </div>

        <div className="review-rating">
          <div>
            <Badge variant="warning">
              {Math.round(fighter.creator.avgRating * 100) / 100}{" "}
            </Badge>
            ({fighter.creator.reviewCount} reviews)
          </div>
          <div className="spar-card-top-right-under-division">
            <div className="spar-card-stance">{fighter.stance}</div>
            <div className="spar-card-stats">
              <div className="spar-card-weight">{fighter.weight}</div>
              {"/"}
              <div className="spar-card-height">{fighter.height}</div>
            </div>
          </div>
        </div>
        <img className="spar-card-img" src={fighter.creator.avatarUrl} />
        <div>
          <div>
            <div className="spar-card-name">{fighter.creator.name}</div>
          </div>
          <div></div>
          {/* {fighterLoading === index ? (
            <div>Loading</div>
          ) : (
            <Button
              variant="primary"
              onClick={(e) => {
                console.log("im hereeeeeeeeeee");
                dispatch(partnershipAction.createSparringRequest(request));
                dispatch(
                  partnershipAction.getStatus(fighter._id, meFighter._id, index)
                );
              }}
            >
              Spar
            </Button>
          )} */}
          <div className="spar-card-button-div">
            {buttonClicked ? (
              <Button variant="">Undo</Button>
            ) : (
              <div>{meFighter && handleStatusButton(fighter.relationship)}</div>
            )}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FighterCard;
