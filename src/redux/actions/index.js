//constants
export const SET_COLOR = 'SET_COLOR';

//set the primaryColor of the board tiles
export const setColor = (color) => {
    return {
        type: SET_COLOR,
        color
    }
};
