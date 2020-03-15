import { SET_COLOR } from '../actions';

//constants for initial state
const INIT_COLOR = '#FFFFFF';

//reducer for setting the board tile color
export const colorReducer = (state = INIT_COLOR, action) => {
    switch (action.type) {
        case SET_COLOR:
            return action.color
        default:
            return state;
    }
};
