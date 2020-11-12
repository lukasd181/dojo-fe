import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fighterAction } from "redux/actions/fighter.action";
import { userAction } from "redux/actions/user.action";

const CreateFighterProfile = () => {
  const fighterLoading = useSelector((state) => state.fighter.loading);
  const currentUser = useSelector((state) => state.user.currentUser);
  const currentFighter = useSelector((state) => state.fighter.fighter);

  const dispatch = useDispatch();
  const history = useHistory();
  const [fighter, setFighter] = useState({
    age: null,
    gender: null,
    weight: null,
    height: null,
    location: null,
    forms: [],
    stance: null,
  });
  const handleSubmit = async (fighter) => {
    dispatch(fighterAction.createFighter(fighter));
  };

  useEffect(() => {
    if (!fighterLoading && currentFighter) {
      history.push("/fighter/main");
    }
    if (!currentUser) {
      history.push("/register");
    }
  }, [currentFighter, currentUser, fighterLoading]);

  return (
    <div className="create-fighter-background">
      <div className="create-fighter-container">
        <div className="create-fighter-body">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(fighter);
            }}
          >
            <div className="create-fighter-header">CREATE FIGHTER PROFILE</div>

            <label>
              Age
              <input
                type="text"
                name="name"
                onChange={(e) =>
                  setFighter({ ...fighter, age: parseInt(e.target.value) })
                }
              />
            </label>
            <label>
              Gender
              <input
                type="text"
                name="name"
                onChange={(e) =>
                  setFighter({ ...fighter, gender: e.target.value })
                }
              />
            </label>
            <label>
              Height
              <input
                type="text"
                name="name"
                onChange={(e) =>
                  setFighter({ ...fighter, height: parseInt(e.target.value) })
                }
              />
            </label>
            <label>
              Weight
              <input
                type="text"
                name="name"
                onChange={(e) =>
                  setFighter({ ...fighter, weight: parseInt(e.target.value) })
                }
              />
            </label>
            <label>
              Location
              <input
                type="text"
                name="name"
                onChange={(e) =>
                  setFighter({ ...fighter, location: e.target.value })
                }
              />
            </label>
            <label>
              Forms
              <input
                type="text"
                name="name"
                onChange={(e) =>
                  setFighter({ ...fighter, forms: [e.target.value] })
                }
              />
            </label>
            <label>
              Stance
              <input
                type="text"
                name="name"
                onChange={(e) =>
                  setFighter({ ...fighter, stance: e.target.value })
                }
              />
            </label>
            <button className="create-fighter-submit" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateFighterProfile;
