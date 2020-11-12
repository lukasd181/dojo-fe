import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button, Badge } from "react-bootstrap";
import { partnershipAction } from "redux/actions/partnership.action";
const FighterCard = ({ fighter, index }) => {
  const dispatch = useDispatch();
  const fighterLoading = useSelector((state) => state.partner.fighterLoading);
  const partnerStatus = useSelector((state) => state.partner.status);
  const partnerLoading = useSelector((state) => state.partner.loading);
  const meFighter = useSelector((state) => state.fighter.meFighter);

  //   console.log("meFighter", meFighter, "fighter", fighter);
  const request = { from: meFighter._id, to: fighter._id };
  const handleStatusButton = (relationship) => {
    if (relationship === "Spar") {
      return (
        <Button
          variant="primary"
          onClick={(e) => {
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
          variant="primary"
          onClick={(e) => {
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
      return <Button variant="primary">{relationship}</Button>;
    }
  };
  useEffect(() => {
    if (fighter)
      dispatch(partnershipAction.getStatus(fighter._id, meFighter._id));
  }, []);
  return (
    <div>
      {console.log("index:", index, "fighterLoading: ", fighterLoading)}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={fighter.creator.avatarUrl} />
        <Card.Body>
          <Card.Title>
            {fighter.creator.name}
            <div className="review-rating">
              {" "}
              <Badge variant="warning">
                {Math.round(fighter.creator.avgRating * 100) / 100}{" "}
              </Badge>
              ({fighter.creator.reviewCount} reviews)
            </div>
          </Card.Title>
          <Card.Text>
            <div className="fighter-card-division">{fighter.division}</div>
            <Badge variant="secondary">{fighter.forms[0]}</Badge>
          </Card.Text>
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
          {meFighter && handleStatusButton(fighter.relationship)}
        </Card.Body>
      </Card>
    </div>
  );
};

export default FighterCard;
