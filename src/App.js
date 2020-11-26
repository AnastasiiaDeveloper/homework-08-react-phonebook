import React, { useCallback } from "react";
import "./App.css";
import MainBlockInp from "./components/input-comp/main-block-inp";
import List from "./components/list/list";
import Register from "./components/login-reg/register/register";
import Login from "./components/login-reg/login/login";
import { NavLink, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  loginSelector,
  dataUserSelector,
} from "./toolkitRedux/contacts-selectors";
import { logOut } from "./toolkitRedux/toolkitReducer";
import UseMenu from "./components/UseMenu";

function App() {
  const a = useSelector(loginSelector);
  const data = useSelector(dataUserSelector);
  const dispatch = useDispatch();
  const logout = useCallback(() => {
    if (window.confirm(`Вы действительно хотите выйти?`)) {
      dispatch(logOut());
    }
  }, [dispatch]);
  return (
    <div className="App">
      <div className="center">
        <Route exact path="/">
          <>
            <Redirect to="/login" />
          </>
        </Route>
        {a ? (
          <UseMenu data={data} logout={logout} />
        ) : (
          <>
            <NavLink to="/register" activeStyle={{ color: "blue" }}>
              <button type="button" className="btn btn-primary">
                sign up
              </button>
            </NavLink>
            <NavLink
              style={{ marginLeft: "5px" }}
              to="/login"
              activeStyle={{ color: "blue" }}
            >
              <button type="button" className="btn btn-success">
                login
              </button>
            </NavLink>
          </>
        )}
        <Route exact path="/register">
          {a ? (
            <>
              <Redirect to="/contacts" />
            </>
          ) : (
            <Register />
          )}
        </Route>
        <Route exact path="/login">
          {a ? (
            <>
              <Redirect to="/contacts" />
            </>
          ) : (
            <Login />
          )}
        </Route>
        <Route exact path="/contacts">
          {a ? (
            <>
              <MainBlockInp />
              <List />
            </>
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
      </div>
    </div>
  );
}

export default App;
