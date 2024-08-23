import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../store/store';
import {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure,
    UserActionTypes,
    createUserRequest,
    createUserSuccess,
    createUserFailure,
    loginUserRequest,
    loginUserSuccess,
    loginUserFailure,
    logoutUserRequest,
    setUserEmailRequest,
} from './actions';
import { postUserData, triggerLogin } from './api';
import { getFromLocalStorage, saveToLocalStorage } from './shared';
import { User } from './user';

export const fetchUser = (): ThunkAction<void, RootState, unknown, UserActionTypes> => async dispatch => {
    dispatch(fetchUserRequest());
    try {
        const data = getFromLocalStorage('currentUser');
        const parsedUser: User = data ? JSON.parse(data) : null;
        dispatch(fetchUserSuccess(parsedUser));
    } catch (error: any) {
        dispatch(fetchUserFailure(error.message));
    }
};

export const setUserEmail = (email: string): ThunkAction<void, RootState, unknown, UserActionTypes> => async dispatch => {
    dispatch(setUserEmailRequest(email));
}

export const createUser = (user: { email: string, password: string }): ThunkAction<void, RootState, unknown, UserActionTypes> => async dispatch => {
    dispatch(createUserRequest());
    try {
        const data = await postUserData(user);
        saveToLocalStorage('currentUser', data);
        dispatch(createUserSuccess(data));
    } catch (error: any) {
        dispatch(createUserFailure(error.message));
    }
};

export const loginUser = (loginInfo: { email: string, password: string }): ThunkAction<void, RootState, unknown, UserActionTypes> => async dispatch => {
    dispatch(loginUserRequest());
    try {
        const resp = await triggerLogin(loginInfo);
        if (resp) {
            saveToLocalStorage('currentUser', resp);
            dispatch(loginUserSuccess(resp));
        }
    } catch (error: any) {
        dispatch(loginUserFailure(error.message));
    }
};

export const logoutUser = (): ThunkAction<void, RootState, unknown, UserActionTypes> => async dispatch => {
    dispatch(logoutUserRequest());
    localStorage.removeItem('currentUser');
};
