import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { matchAction } from "redux/actions/match.action";

const HostCreateMatchPage = () => {
  const currentHost = useSelector((state) => state.host.host);
  const dispatch = useDispatch();
  const [fighter1, setFighter1] = useState("");
  const [fighter2, setFighter2] = useState("");
  const [matchInfo, setMatchInfo] = useState({
    rounds: 3,
    roundDuration: 3,
    form: "MuayThai",
    gender: "female",
    division: "Strawweight",
    location: "",
    timeHappen: null,
    host: currentHost._id,
    matchTitle: "",
  });
  const handleSubmit = () => {
    let fighters = [];
    let realMatchInfo = matchInfo;
    if (fighter1) fighters.push(fighter1);
    if (fighter2) fighters.push(fighter2);
    realMatchInfo["fighters"] = fighters;

    console.log("match info submit", realMatchInfo);
    dispatch(matchAction.createMatch(realMatchInfo));
  };
  return (
    <div className="avoidNav host-create-match-page">
      <div className="create-fighter-container">
        <div className="create-fighter-body">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <Form.Label>Form</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => {
                console.log(e.target.value);
                setMatchInfo({ ...matchInfo, form: e.target.value });
              }}
            >
              <option>Form of Martial Arts</option>
              <option>MuayThai</option>
              <option>KickBoxing</option>
              <option>Boxing</option>
              <option>JiuJitSu</option>
              <option>MMA</option>
            </Form.Control>
            <Form.Label>Division</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => {
                console.log(e.target.value);
                setMatchInfo({ ...matchInfo, division: e.target.value });
              }}
            >
              <option>Division</option>
              <option>Strawweight</option>
              <option>Flyweight</option>
              <option>Bantamweight</option>
              <option>Featherweight</option>
              <option>Lightweight</option>
              <option>Welterweight</option>
              <option>Middleweight</option>
              <option>Light Heavyweight</option>
              <option>Heavyweight</option>
            </Form.Control>

            <Form.Label>Gender</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) =>
                setMatchInfo({ ...matchInfo, gender: e.target.value })
              }
            >
              <option>Gender</option>
              <option>female</option>
              <option>male</option>
            </Form.Control>

            <Form.Label>Match Rounds (Minutes)</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) =>
                setMatchInfo({ ...matchInfo, rounds: parseInt(e.target.value) })
              }
            >
              <option>...</option>
              <option>3</option>
              <option>5</option>
              <option>10</option>
            </Form.Control>
            <Form.Label>Match Round Duration (Minutes)</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) =>
                setMatchInfo({
                  ...matchInfo,
                  roundDuration: parseInt(e.target.value),
                })
              }
            >
              <option>...</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Match Title</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  console.log(e.target.value);
                  setMatchInfo({ ...matchInfo, matchTitle: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Your Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your location"
                onChange={(e) => {
                  console.log(e.target.value);
                  setMatchInfo({ ...matchInfo, location: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Fighter 1</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter fighter's ID"
                onChange={(e) => {
                  console.log(e.target.value);
                  setFighter1(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Fighter 2</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter fighter's ID"
                onChange={(e) => {
                  console.log(e.target.value);
                  setFighter2(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Match Occur</Form.Label>
              <DatePicker
                selected={matchInfo.timeHappen}
                onChange={(date) => {
                  console.log(date);
                  setMatchInfo({ ...matchInfo, timeHappen: date });
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Button variant="primary" type="submit">
                Create Match
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default HostCreateMatchPage;
