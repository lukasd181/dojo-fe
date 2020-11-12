import CommonPagination from "CommonSite/components/CommonPagination";
import FighterCard from "FighterSite/components/FighterCard";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fighterAction } from "redux/actions/fighter.action";
import { Form, Button } from "react-bootstrap";

const LIMIT = 20;
const SparringPage = () => {
  const meFighter = useSelector((state) => state.fighter.meFighter);
  const fighterLoading = useSelector((state) => state.fighter.loading);
  const currentPage = useSelector((state) => state.fighter.currentPage);
  const fighterTotalPages = useSelector((state) => state.fighter.totalPages);
  const fighterList = useSelector((state) => state.fighter.fighterList);
  const [filter, setFilter] = useState({
    location: "",
    gender: "",
    division: "",
  });
  const dispatch = useDispatch();

  const handlePageChange = (pageNumber) => {
    dispatch(fighterAction.updatePage(pageNumber));
  };

  useEffect(() => {
    dispatch(fighterAction.getOwnFighter());
  }, []);

  useEffect(() => {
    if (meFighter && !fighterLoading) {
      dispatch(fighterAction.getFighters(filter, currentPage, meFighter._id));
    }
  }, [currentPage, filter]);
  return (
    <div>
      {fighterList ? (
        <div className="sparring-page">
          <div className="sparring-header">
            <div className="filter-area">
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  dispatch(fighterAction.updatePage(1));
                  dispatch(
                    fighterAction.getFighters(
                      filter,
                      currentPage,
                      meFighter._id
                    )
                  );
                }}
              >
                <Form.Control
                  as="select"
                  onChange={(e) => {
                    if (e.target.value === "All" || e.target.value === null) {
                      setFilter({ ...filter, division: "" });
                    } else {
                      setFilter({ ...filter, division: e.target.value });
                    }
                  }}
                >
                  <option>
                    {filter.division ? filter.division : "Division"}
                  </option>
                  <option> Strawweight</option>
                  <option> Bantamweight</option>
                  <option> Featherweight</option>
                  <option> Flyweight</option>
                  <option> Lightweight</option>
                  <option> Welterweight</option>
                  <option> Middleweight</option>
                  <option> Light Heavyweight</option>
                  <option> Heavyweight</option>
                  <option>All</option>
                </Form.Control>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your location"
                    onChange={(e) => {
                      //   console.log(e.target.value);
                      setFilter({
                        ...filter,
                        location: e.target.value,
                      });
                    }}
                  />
                </Form.Group>
                <Button type="submit">Filter</Button>
              </Form>
            </div>
          </div>
          {fighterList.length == 0 ? (
            <h1>Fighter Not Found</h1>
          ) : (
            <div className="sparring-card-list">
              {fighterList ? (
                fighterList.map((fighter, index) => (
                  <FighterCard fighter={fighter} index={index} />
                ))
              ) : (
                <div>Loading...</div>
              )}
            </div>
          )}

          <div className="sparring-pagination">
            <CommonPagination
              totalPages={fighterTotalPages}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
              limit={LIMIT}
            />
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default SparringPage;
