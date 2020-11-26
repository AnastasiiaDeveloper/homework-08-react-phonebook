import { createSelector } from "reselect";

const con = (state) => state.toolkit.contacts.items;
const filter = (state) => state.toolkit.contacts.filter;
const login = (state) => state.toolkit.contacts.login;
const keyAuth = (state) => state.toolkit.contacts.keyAuth;
const dataUser = (state) => state.toolkit.contacts.dataUser;

export const contactsSelector = createSelector(con, (getList) => getList);
export const filterSelector = createSelector(filter, (filter) => filter);
export const loginSelector = createSelector(login, (getLogin) => getLogin);
export const keyAuthSelector = createSelector(
  keyAuth,
  (getKeyAuth) => getKeyAuth
);
export const dataUserSelector = createSelector(
  dataUser,
  (getDataUser) => getDataUser
);
