import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fighterAction } from "redux/actions/fighter.action";
import DojoPagination from "CommonSite/components/MatchPagination";
import FighterMatchCard from "FighterSite/components/OldFighterMatchCard";
import { matchAction } from "redux/actions/match.action";
import MatchPagination from "CommonSite/components/MatchPagination";
import { Form, Button } from "react-bootstrap";
import MatchCard from "CommonSite/components/MatchCard";

const MatchFeed = () => {
  const dispatch = useDispatch();
  const matchCurrentPage = useSelector((state) => state.match.currentPage);
  const matchLoading = useSelector((state) => state.match.loading);
  const meFighter = useSelector((state) => state.fighter.meFighter);
  const matchList = useSelector((state) => state.match.matchList);
  const [filter, setFilter] = useState({
    form: "",
    gender: "",
    division: "",
    location: "",
    status: "",
    host: "",
    isLooking: false,
  });

  useEffect(() => {
    dispatch(matchAction.getMatches(matchCurrentPage, filter));
  }, [matchCurrentPage]);
  return (
    <div>
      {matchLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="match-feed-header">
            <div className="match-feed-title">Match Feed</div>
            <div className="match-feed-filter">
              <div className="division-filter">
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(matchAction.updatePage(1));
                    dispatch(matchAction.getMatches(matchCurrentPage, filter));
                  }}
                >
                  <div className="d-flex input-row">
                    <Form.Control
                      as="select"
                      onChange={(e) => {
                        if (
                          e.target.value === "All" ||
                          e.target.value === null
                        ) {
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
                    <Form.Control
                      as="select"
                      onChange={(e) => {
                        console.log(e.target.value);
                        if (
                          e.target.value === "All" ||
                          e.target.value === null
                        ) {
                          setFilter({ ...filter, gender: "" });
                        } else {
                          setFilter({ ...filter, gender: e.target.value });
                        }
                      }}
                    >
                      <option>
                        {filter.gender ? filter.gender : "Gender"}
                      </option>
                      <option>male</option>
                      <option> female</option>
                      <option>All</option>
                    </Form.Control>
                    <Form.Control
                      as="select"
                      onChange={(e) => {
                        console.log(e.target.value);
                        if (
                          e.target.value === "All" ||
                          e.target.value === null
                        ) {
                          setFilter({ ...filter, status: "" });
                        } else {
                          setFilter({ ...filter, status: e.target.value });
                        }
                      }}
                    >
                      <option>
                        {filter.status ? filter.status : "Status"}
                      </option>
                      <option>ready</option>
                      <option>ended</option>
                      <option>looking</option>
                      <option>happening</option>
                      <option>cancelled</option>
                      <option>All</option>
                    </Form.Control>{" "}
                  </div>
                  <div className="d-flex input-row">
                    <Form.Control
                      className="form-input"
                      as="select"
                      onChange={(e) => {
                        console.log(e.target.value);
                        if (
                          e.target.value === "All" ||
                          e.target.value === null
                        ) {
                          setFilter({ ...filter, form: "" });
                        } else {
                          setFilter({ ...filter, form: e.target.value });
                        }
                      }}
                    >
                      <option>{filter.form ? filter.form : "Form"}</option>
                      <option>MMA</option>
                      <option>MuayThai</option>
                      <option>Boxing</option>
                      <option>KickBoxing</option>
                      <option>JiuJitsu</option>
                      <option>All</option>
                    </Form.Control>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        placeholder="Enter your location"
                        onChange={(e) => {
                          console.log(e.target.value);
                          setFilter({
                            ...filter,
                            location: e.target.value,
                          });
                        }}
                      />
                    </Form.Group>

                    <Button type="submit" className="filter-button">
                      Filter
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="match-feed-body">
            {matchList && console.log(matchList)}
            {matchList && matchList.map((match) => <MatchCard match={match} />)}
          </div>
          <MatchPagination />
        </div>
      )}
    </div>
  );
};

export default MatchFeed;
