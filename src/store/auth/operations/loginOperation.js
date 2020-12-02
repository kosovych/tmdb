import { createLogic } from 'redux-logic';
import { LOGIN_SUBMIT, LOGIN_LOADING, LOGIN_ERROR, LOGIN_SUCCESS } from '../actions/types';
import { API_KEY } from '../../../constants';

export const loginOperation = createLogic({
    type: LOGIN_SUBMIT,
    latest: true,
    async process({ action, axios }, dispatch, done) {
        dispatch({type: LOGIN_LOADING, loading: true});
        dispatch({type: LOGIN_ERROR, error: false, errorTxt: null});
        let sessionID;
        const {username, password} = action;
        try {
            const requestToken = await axios.get(`/authentication/token/new?api_key=${API_KEY}`)
            .then(res => res.data.request_token);
    
            const sessionRequestToken = await axios.post(
                `/authentication/token/validate_with_login?api_key=${API_KEY}`,
                {
                    request_token: requestToken,
                    username,
                    password,
                }
            )
            .then(res => res.data.request_token);
            
            sessionID = await axios.post(
                `/authentication/session/new?api_key=${API_KEY}`,
                {request_token: sessionRequestToken}
            )
            .then(res => res.data.session_id);
            localStorage.setItem('session_id', sessionID);
        } catch (err) {
            dispatch({type: LOGIN_ERROR, error: true, errorTxt: err.response.data.status_message });
        }
        dispatch({type: LOGIN_SUCCESS, sessionID: sessionID})
        dispatch({type: LOGIN_LOADING, loading: false})
        done();
    }
});
