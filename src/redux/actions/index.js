//constants
export const SET_GAME = 'SET_GAME';
// export const SET_GRID = 'SET_GRID';

export const setGame = (game) => {
    return {
        type: SET_GAME,
        game
    }
};

// export const setGrid = (game) => {
//     return {
//         type: SET_GRID,
//         game
//     }
// };
