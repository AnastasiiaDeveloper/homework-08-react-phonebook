import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  contactsSelector,
  keyAuthSelector,
} from "./../../../toolkitRedux/contacts-selectors";
import {
  addContactThunk,
  loadDataStartApp,
} from "./../../../toolkitRedux/toolkitReducer";

const AddComp = () => {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [err, setErr] = useState(false);
  const [errP, setErrP] = useState(false);
  const [errS] = useState({
    a: {
      opacity: 0,
      position: "absolute",
      marginTop: "-60px",
      fontSize: "1.3em",
      transition: "2s",
      marginLeft: "500px",
      background: "red",
      bordeRadius: "10px",
      color: "white",
      padding: "4px",
    },
    b: {
      opacity: 1,
      position: "absolute",
      marginTop: "-60px",
      marginLeft: "0px",
      fontSize: "1.3em",
      transition: "2s",
      background: "red",
      bordeRadius: "10px",
      color: "white",
      padding: "4px",
    },
  });
  const contacts = useSelector(contactsSelector);
  const key = useSelector(keyAuthSelector);

  const dispatch = useDispatch();
  const handler = useCallback(
    (p1, p2, p3Arr) => {
      if (p1.trim() === "" || p2.trim() === "") {
        setErrP(true);
        setTimeout(() => {
          setErrP(false);
        }, 3000);
      } else {
        // проверка
        const filterSearch = (arrayTodo) => {
          return arrayTodo.filter((item) => {
            return item.name === p1;
          });
        };
        if (filterSearch(p3Arr).length > 0) {
          setErr(true);
          setTimeout(() => {
            setErr(false);
          }, 3000);
        } else {
          // dispatch(addContact(p1, p2));
          dispatch(addContactThunk(p1, p2, key));
        }
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
  const sendDataTuRedux = () => {
    handler(name, num, contacts);
  };
  const load = useCallback(() => {
    dispatch(loadDataStartApp(key));
  }, [dispatch]);
  useEffect(() => {
    load();
  }, []);
  return (
    <div>
      <div className="form-group">
        <p style={err ? errS.b : errS.a}>
          {" "}
          {name} пользователь уже зарегестрирован
        </p>
        <p style={errP ? errS.b : errS.a}> заполните все поля</p>
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          onChange={actionName}
          value={name}
          aria-describedby="emailHelp"
        />
      </div>
      <div className="form-group">
        <label>Number</label>
        <input
          type="number"
          className="form-control"
          onChange={actionNum}
          value={num}
        />
      </div>
      <button
        style={{ width: "100%" }}
        type="submit"
        className="btn btn-dark"
        onClick={() => sendDataTuRedux()}
      >
        Add contact
      </button>
    </div>
  );
};
export default AddComp;
