import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { hostAction } from "redux/actions/host.action";


const CreateHostProfile = () => {
  const history = useHistory();
  const hostLoading = useSelector((state) => state.host.loading);
  const currentHost = useSelector((state) => state.host.host);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const [host, setHost] = useState({
    clubName: "",
    emailAddress: currentUser.email,
    phone: "",
  });

  const handleSubmit = (host) => {
    dispatch(hostAction.createHost(host));
  };

  useEffect(() => {
    if (currentHost && !hostLoading) {
      history.push("/host/main");
    }
    if (!currentUser) history.push("/register");
  }, [hostLoading, currentHost, currentUser]);
  return (
    <div className="create-fighter-background">
      <div className="create-fighter-container">
        <div className="create-fighter-body">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(host);
            }}
          >
            <div className="create-fighter-header">CREATE HOST PROFILE</div>

            <label>
              Club Name
              <input
                type="text"
                name="name"
                onChange={(e) => setHost({ ...host, clubName: e.target.value })}
              />
            </label>
            <label>
              EmailAddress
              <input
                type="text"
                name="name"
                value={currentUser.email}
                onChange={(e) =>
                  setHost({ ...host, emailAddress: e.target.value })
                }
              />
            </label>
            <label>
              Phone
              <input
                type="text"
                name="name"
                onChange={(e) =>
                  setHost({ ...host, phone: parseInt(e.target.value) })
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

export default CreateHostProfile;
