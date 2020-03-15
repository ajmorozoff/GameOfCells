import { SET_GAME } from '../actions';

//constants for initial state
const INIT_GAME = null;

export const gameReducer = (state = INIT_GAME, action) => {
    switch (action.type) {
        case SET_GAME:
            return action.game
        default:
            return state;
    }
};
