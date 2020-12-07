import axios from 'axios';

export const FETCH_BEAGLES_START = 'FETCH_BEAGLES_START';
export const FETCH_BEAGLES_SUCCESS = 'FETCH_BEAGLES_SUCCESS';
export const FETCH_BEAGLES_FAILURE = 'FETCH_BEAGLES_FAILURE';

export const fetchBeagles = () => {
    return (dispatch) => {

        dispatch({ type: FETCH_BEAGLES_START });

        axios.get(`https://dog.ceo/api/breed/beagle/images`)
            .then( res => {
                dispatch({type: FETCH_BEAGLES_SUCCESS, payload: res.data.message})
            })
            .catch( err => {
                dispatch({type: FETCH_BEAGLES_FAILURE, payload: err.message})
            });
    }


}
