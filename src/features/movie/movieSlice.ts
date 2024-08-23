import { GET_ALL_MOVIES_FAILURE, GET_ALL_MOVIES_REQUEST, GET_ALL_MOVIES_SUCCESS, GET_MOVIES_BY_ID_FAILURE, GET_MOVIES_BY_ID_REQUEST, GET_MOVIES_BY_ID_SUCCESS, } from "./actionTypes";
import { Movie } from "./movie";

interface MovieState {
    loading: boolean;
    recommended: Movie[];
    newDisney: Movie[];
    originals: Movie[];
    trending: Movie[];
    selectedMovie: Movie | null;
    error: string | null;
}

const initialState: MovieState = {
    loading: false,
    recommended: [],
    newDisney: [],
    originals: [],
    trending: [],
    selectedMovie: null,
    error: null,
};

export const movieReducer = (state = initialState, action: any): MovieState => {
    switch (action.type) {        
        case GET_ALL_MOVIES_REQUEST:
            return { ...state, loading: true, error: null };
        case GET_ALL_MOVIES_SUCCESS:
            return { ...state, loading: false, recommended: action.payload.recommended, newDisney: action.payload.newDisney, originals: action.payload.originals, trending: action.payload.trending};
        case GET_ALL_MOVIES_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case GET_MOVIES_BY_ID_REQUEST:
                return { ...state, loading: true, error: null };
        case GET_MOVIES_BY_ID_SUCCESS:
            return { ...state, loading: false, selectedMovie: action.payload };
        case GET_MOVIES_BY_ID_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

// I NEED TO IMPLEMENT SELECTORS
