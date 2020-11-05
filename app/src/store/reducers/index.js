import {
    FETCH_BEAGLES_START,
    FETCH_BEAGLES_SUCCESS,
    FETCH_BEAGLES_FAILURE
} from './../actions';

const initialState = {
    isLoading: false,
    beagleData: [],
    error: ''
};

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_BEAGLES_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_BEAGLES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                beagleData: action.payload
            }
        case FETCH_BEAGLES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

