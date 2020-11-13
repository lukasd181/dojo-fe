import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { partnershipAction } from "redux/actions/partnership.action";

const SparringRequestCard = ({ sparRequest }) => {
  const dispatch = useDispatch();
  const [buttonClicked, setButtonClicked] = useState("");
  const toFighterId = sparRequest.friendship.from._id;
  const fighterId = sparRequest.friendship.to._id;

  return (
    <div>
      {/* <div className="spar-request-card">
        <div className="spar-request-card-left">
          <div className="spar-request-card-img">
            <img src={sparRequest.creator.avatarUrl} />
          </div>
        </div>
        <div className="spar-request-card-right">
          <div className="spar-request-header">
            <div className="spar-requester-name">
              {sparRequest.creator.name}
            </div>
          </div>
          <div className="spar-requester-stats">
            <div className="spar-requester-form">{sparRequest.form[0]}</div>
            <div className="spar-requester-division">
              {sparRequest.division}
            </div>
            <div className="spar-requester-division">
              {sparRequest.location}
            </div>
          </div>
        </div>
      </div>
    </div> */}
      <div className="spar-request-card-container">
        <div className="spar-request-card">
          <div className="spar-request-card-upper">
            <div className="spar-request-card-left">
              <div className="spar-request-card-img">
                <img
                  className="spar-request-card-actual-img"
                  src={sparRequest.creator.avatarUrl}
                />
              </div>
            </div>

            <div className="spar-request-card-right">
              <div className="spar-request-header">
                <div className="spar-requester-name">
                  {sparRequest.creator.name}
                </div>
              </div>
              <div className="spar-requester-stats">
                <div className="stats-right">
                  <div className="spar-requester-form badge badge-danger">
                    {sparRequest.forms[0]}
                  </div>
                  <div className="spar-requester-division">
                    {sparRequest.division}
                  </div>
                  <div className="spar-requester-location">
                    {sparRequest.location}
                  </div>
                  <div className="stats-review-rating badge badge-warning">
                    {sparRequest.creator.avgRating == 0
                      ? "N/A"
                      : `${sparRequest.creator.avgRating}/ 5`}
                    ({sparRequest.creator.reviewCount} reviews)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="spar-request-card-lower">
            {buttonClicked ? (
              <div className="spar-request-card-sent">
                <div>{buttonClicked}</div>
              </div>
            ) : (
              <div className="spar-request-two-button">
                <div className="spar-request-button">
                  <button
                    className="accept-button"
                    type="button"
                    onClick={(e) => {
                      dispatch(
                        partnershipAction.acceptSparRequest(
                          fighterId,
                          toFighterId
                        )
                      );
                      setButtonClicked("accepted");
                    }}
                    disabled={buttonClicked}
                  >
                    Accept
                  </button>
                </div>
                <div className="spar-request-button">
                  <button
                    className="decline-button"
                    type="button"
                    onClick={(e) => {
                      dispatch(
                        partnershipAction.declineSparRequest(
                          fighterId,
                          toFighterId
                        )
                      );
                      setButtonClicked("declined");
                    }}
                    disabled={buttonClicked}
                  >
                    Decline
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SparringRequestCard;
