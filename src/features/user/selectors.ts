import { RootState } from '../../store/store';
import { UserState } from './reducers';

export const selectUserState = (state: RootState): UserState => state.currentUser;

export const selectCurrentUser = (state: RootState) => selectUserState(state).currentUser; 

export const selectUserLoading = (state: RootState) => selectUserState(state).loading;

export const selectUserError = (state: RootState) => selectUserState(state).error;

export const selectLoginInfo = (state: RootState) => selectUserState(state).loginInfo;
