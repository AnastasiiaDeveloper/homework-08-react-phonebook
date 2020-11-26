import React, { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  loadDataStartApp,
  signUpThunk,
} from "../../../toolkitRedux/toolkitReducer";

const Register = () => {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const handler = useCallback(
    (p1, p2, p3) => {
      if (p2.length < 8) {
        alert("длина пароля должна быть не менее 8 символов");
      } else {
        dispatch(signUpThunk(p1, p2, p3));
        setName("");
        setNum("");
        setEmail("");
        alert("вы успешно зарегистрированы");
      }
    },
    [dispatch]
  );

  const actionName = (ev) => {
    setName(ev.target.value);
  };
  const actionNum = (ev) => {
    setNum(ev.target.value);
  };
  const actionEmail = (ev) => {
    setEmail(ev.target.value);
  };
  const sendDataTuRedux = () => {
    handler(name, num, email);
  };

  return (
    <div>
      <div className="form-group">
        <div className="form-group">
          <label>login</label>
          <input
            type="text"
            className="form-control"
            onChange={actionName}
            value={name}
          />
        </div>
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
          onChange={actionNum}
          value={num}
          minLength="8"
        />
      </div>
      <button
        style={{ width: "100%" }}
        type="submit"
        className="btn btn-dark"
        onClick={() => sendDataTuRedux()}
      >
        sign up
      </button>
    </div>
  );
};
export default Register;
