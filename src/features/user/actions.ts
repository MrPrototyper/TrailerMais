import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE, LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER, SET_LOGIN_EMAIL, CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_FAILURE } from './actionTypes';
import { User } from './user';

export interface FetchUserRequestAction {
  type: typeof FETCH_USER_REQUEST;
}
export interface FetchUserSuccessAction {
  type: typeof FETCH_USER_SUCCESS;
  payload: User | null;
}
export interface FetchUserFailureAction {
  type: typeof FETCH_USER_FAILURE;
  payload: string;
}

export interface LoginUserAction {
  type: typeof LOGIN_USER;
}
export interface LoginUserSuccessAction {
  type: typeof LOGIN_USER_SUCCESS;
  payload: User;
}
export interface LoginUserFailureAction {
  type: typeof LOGIN_USER_FAILURE;
  payload: string;
}

export interface setLoginEmailAction {
  type: typeof SET_LOGIN_EMAIL;
  payload: { email: string | null, password: string | null } | null;
}

export interface LogoutUserAction {
  type: typeof LOGOUT_USER;
}

export interface CreateUserRequestAction {
  type: typeof CREATE_USER_REQUEST;
}
export interface CreateUserSuccessAction {
  type: typeof CREATE_USER_SUCCESS;
  payload: User;
}
export interface CreateUserFailureAction {
  type: typeof CREATE_USER_FAILURE;
  payload: string;
}

export const fetchUserRequest = (): FetchUserRequestAction => ({
  type: FETCH_USER_REQUEST,
});

export const fetchUserSuccess = (user: User | null): FetchUserSuccessAction => ({
  type: FETCH_USER_SUCCESS,
  payload: user,
});

export const fetchUserFailure = (error: string): FetchUserFailureAction => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});

export const loginUserRequest = (): LoginUserAction => ({
  type: LOGIN_USER,
});

export const loginUserSuccess = (response: User): LoginUserSuccessAction => ({
  type: LOGIN_USER_SUCCESS,
  payload: response,
});

export const loginUserFailure = (error: string): LoginUserFailureAction => ({
  type: LOGIN_USER_FAILURE,
  payload: error,
});

export const logoutUserRequest = (): LogoutUserAction => ({
  type: LOGOUT_USER,  
});

export const setUserEmailRequest = (email: string): setLoginEmailAction => ({
  type: SET_LOGIN_EMAIL,
  payload: {email: email, password: null},  
});

export const createUserRequest = (): CreateUserRequestAction => ({
  type: CREATE_USER_REQUEST,
});

export const createUserSuccess = (newUser: User): CreateUserSuccessAction => ({
  type: CREATE_USER_SUCCESS,
  payload: newUser,
});

export const createUserFailure = (error: string): CreateUserFailureAction => ({
  type: CREATE_USER_FAILURE,
  payload: error,
});

export type UserActionTypes = FetchUserRequestAction |
  FetchUserSuccessAction |
  FetchUserFailureAction |
  LoginUserAction |
  LoginUserSuccessAction |
  LogoutUserAction |
  LoginUserFailureAction |
  CreateUserRequestAction |
  CreateUserSuccessAction |
  CreateUserFailureAction |
  setLoginEmailAction;