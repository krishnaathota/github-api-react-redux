import { FETCH_API } from '../actions';

const initialState ={
    data: []
};

export default function repos(state = initialState, action) {
 switch (action.type) {
    case FETCH_API: {
        return {
            ...state, data: action.payload.body
        };
    }
    default:
     return state
 }
}