import request from 'superagent';
import Firebase from 'firebase';

export const FETCH_API= 'FETCH_API';

const GITHUB_API = 'https://api.github.com/repositories';


const config = {
    apiKey: "qA4cYwvjdbFh4dRFSPvtYaxZHD98smNE",
    authDomain: "",
    databaseURL: "",
};

Firebase.initializeApp(config);

export function requestAPI() {
    return function(dispatch) {
        request.get(`${GITHUB_API}`).then(response => {
            console.log(response);
            dispatch({
                type: FETCH_API,
                payload: response
            });
        });
    }
}
