import { createAction, createReducer } from "@reduxjs/toolkit";
import { getApiPhone } from "./../reqToServer/serverApi";

export const actionLoadData = createAction(
  "ACTION_DATA",
  function prepare(data) {
    return {
      payload: {
        data,
      },
    };
  }
);
export const logOut = createAction("LOG_OUT");

export const actionLogin = createAction("login", function prepare(req) {
  return {
    payload: {
      req,
    },
  };
});

export const findContact = createAction("FILTER", function prepare(find) {
  return {
    payload: {
      find,
    },
  };
});
export const addContactThunk = (p1, p2, key) => {
  return async (dispatch) => {
    try {
      await new getApiPhone().addPost(p1, p2, key);

      const data = await new getApiPhone().getList(key);
      return dispatch(actionLoadData(data));
    } catch {
      console.log("error add cont");
    }
  };
};
export const signUpThunk = (p1, p2, p3) => {
  return async () => {
    try {
      const data = await new getApiPhone().signUp(p1, p2, p3);
      console.log("thunk", data);
    } catch {
      console.log("error add user");
    }
  };
};
export const loginThunk = (email, password) => {
  return async (dispatch) => {
    try {
      const data = await new getApiPhone().logIn(email, password);
      return dispatch(actionLogin(data));
    } catch {
      alert("error login");
      console.log("error login");
    }
  };
};
export const deletContactThunk = (id, key) => {
  return async (dispatch) => {
    try {
      await new getApiPhone().deletCont(id, key);

      const data = await new getApiPhone().getList(key);
      return dispatch(actionLoadData(data));
    } catch {
      console.log("error delet cont");
    }
  };
};
export const loadDataStartApp = (key) => {
  return async (dispatch) => {
    try {
      const data = await new getApiPhone().getList(key);
      return dispatch(actionLoadData(data));
    } catch {
      console.log("error get list");
    }
  };
};
const initialState = {
  contacts: {
    items: [],
    filter: "",
    login: JSON.parse(localStorage.getItem("login")) || false,
    keyAuth: JSON.parse(localStorage.getItem("key")) || "",
    dataUser: JSON.parse(localStorage.getItem("data")) || null,
  },
};
export default createReducer(initialState, {
  [actionLoadData]: function (state, action) {
    state.contacts.items = action.payload.data.data;
  },
  [actionLogin]: function (state, action) {
    if (action.payload.req.status === 200) {
      localStorage.setItem(
        "key",
        JSON.stringify(action.payload.req.data.token)
      );
      localStorage.setItem("login", "true");
      localStorage.setItem(
        "data",
        JSON.stringify(action.payload.req.data.user)
      );
      console.log("action", action);
      state.contacts.login = true;
      state.contacts.keyAuth = action.payload.req.data.token;
      state.contacts.dataUser = action.payload.req.data.user;
    }
  },
  [findContact]: function (state, action) {
    state.contacts.filter = action.payload.find;
  },
  [logOut]: function (state) {
    localStorage.setItem("login", "false");
    state.contacts.login = false;
    state.contacts.keyAuth = "";
    state.contacts.dataUser = "";
  },
});



