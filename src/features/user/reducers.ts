import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    LOGIN_USER,
    LOGIN_USER_FAILURE,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
    SET_LOGIN_EMAIL,
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE
} from "./actionTypes";
import { User } from './user';

export interface UserState {
    loading: boolean;
    currentUser: User | null;
    loginInfo: { email: string | null, password: string | null } | null;
    error: string | null;
}

const initialState: UserState = {
    loading: false,
    currentUser: null,
    loginInfo: null,
    error: null,
};

export const userReducer = (state = initialState, action: any): UserState => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_USER_SUCCESS:
            return { ...state, loading: false, currentUser: action.payload };
        case FETCH_USER_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true, error: null };
        case LOGIN_USER_SUCCESS:
            return { ...state, loading: false, currentUser: action.payload };
        case LOGIN_USER_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case LOGOUT_USER:
            return { ...state, currentUser: null };
        case SET_LOGIN_EMAIL:
            return { ...state, loginInfo: action.payload };
        case CREATE_USER_REQUEST:
            return { ...state, loading: true, error: null };
        case CREATE_USER_SUCCESS:
            return { ...state, loading: false, currentUser: action.payload };
        case CREATE_USER_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};