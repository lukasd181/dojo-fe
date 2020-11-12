import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { partnershipAction } from "redux/actions/partnership.action";

const SparringRequestCard = ({ sparRequest }) => {
  const dispatch = useDispatch();
  const [buttonClicked, setButtonClicked] = useState(false);
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
      <div className="spar-request-card">
        <div className="spar-request-card-left">
          <div className="spar-request-card-img">
            <img
              className="spar-request-card-actual-img"
              src={sparRequest.creator.avatarUrl}
            />
          </div>
        </div>
        <div className="spar-request-card-middle">
          <div className="spar-request-header">
            <div className="spar-requester-name">
              {sparRequest.creator.name}
            </div>
          </div>
          <div className="spar-requester-stats">
            <div className="spar-requester-form">{sparRequest.forms[0]}</div>
            <div className="spar-requester-division">
              {sparRequest.division}
            </div>
            <div className="spar-requester-location">
              {sparRequest.location}
            </div>
          </div>
        </div>
        <div className="spar-request-card-right">
          {buttonClicked ? (
            <div>Sent</div>
          ) : (
            <div>
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
                    setButtonClicked(true);
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
                    setButtonClicked(true);
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
  );
};

export default SparringRequestCard;
