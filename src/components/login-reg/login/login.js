import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactsSelector } from "../../../toolkitRedux/contacts-selectors";
import { loginThunk } from "../../../toolkitRedux/toolkitReducer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const dispatch = useDispatch();
  const handler = useCallback(
    (p1, p2) => {
      if (p2.length < 8) {
        alert("длина пароля должна быть не менее 8 символов");
      } else {
        dispatch(loginThunk(p1, p2));
        setEmail("");
        setPass("");
      }
    },
    [dispatch]
  );

  const actionEmail = (ev) => {
    setEmail(ev.target.value);
  };
  const actionPass = (ev) => {
    setPass(ev.target.value);
  };
  const sendDataTuRedux = () => {
    handler(email, pass);
  };

  return (
    <div>
      <div className="form-group">
        <label>email</label>
        <input
          type="text"
          className="form-control"
          onChange={actionEmail}
          value={email}
          aria-describedby="emailHelp"
        />
      </div>
      <div className="form-group">
        <label>password</label>
        <input
          type="password"
          className="form-control"
          onChange={actionPass}
          value={pass}
        />
      </div>
      <button
        style={{ width: "100%" }}
        type="submit"
        className="btn btn-dark"
        onClick={() => sendDataTuRedux()}
      >
        login
      </button>
    </div>
  );
};
export default Login;
