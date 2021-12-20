import { createAction } from "@reduxjs/toolkit";

const AUTH_REGISTER_USER = createAction("REGISTER");
const AUTH_LOGIN_USER = createAction("LOGIN");
const AUTH_LOGOUT_USER = createAction("LOGOUT");
const AUTH_FILL_EXISTS = createAction("CHECK_EXISTS");

export { AUTH_REGISTER_USER, AUTH_LOGIN_USER, AUTH_LOGOUT_USER, AUTH_FILL_EXISTS };
