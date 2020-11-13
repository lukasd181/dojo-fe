import SparringRequestCard from "FighterSite/components/SparringRequestCard";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { partnershipAction } from "redux/actions/partnership.action";

const SparringRequestList = () => {
  const dispatch = useDispatch();
  const partnerLoading = useSelector((state) => state.partner.loading);
  const sparRequests = useSelector((state) => state.partner.sparRequests);
  const currentPage = useSelector((state) => state.partner.currentPage);
  const handleRequest = useSelector((state) => state.partner.currentPage);
  const meFighter = useSelector((state) => state.fighter.meFighter);
  useEffect(() => {
    if (!handleRequest) {
      if (meFighter)
        dispatch(partnershipAction.getReceivedSparRequest(meFighter._id, 1));
    }
  }, [handleRequest]);

  useEffect(() => {
    if (meFighter) {
      // console.log("asdasdasdasdsdasdadasda", meFighter)
      dispatch(partnershipAction.getReceivedSparRequest(meFighter._id, 1));
    }
  }, [meFighter]);

  const sparRequestDisplayLogic = () => {
    if (sparRequests) {
      if (sparRequests.length === 0) {
        return <div className="spar-request-no-fighter">No Spar Request Found Jet</div>;
      } else if (sparRequests.length > 0) {
        return (
          <div className="spar-request-list">
            {" "}
            {sparRequests ? (
              sparRequests.map((sparRequest) => (
                <SparringRequestCard sparRequest={sparRequest} />
              ))
            ) : (
              <div>Loading...</div>
            )}
          </div>
        );
      }
    }
  };

  return (
    <div>
      <div className="spar-request-list-container">
        <div className="spar-request-list-header">
          <div className="spar-request-list-title">
            Sparring Request List
          </div>
        </div>
        {sparRequestDisplayLogic()}
      </div>
    </div>
  );
};

export default SparringRequestList;
