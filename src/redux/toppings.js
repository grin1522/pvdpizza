import * as ActionTypes from './ActionTypes';

export const Toppings = (state = {
    isLoading: true,
    errMess: null,
    toppings: []
}, action) => {
switch (action.type) {
    case ActionTypes.ADD_TOPPINGS:
        return {...state, isLoading: false, errMess: null, toppings: action.payload};
    case ActionTypes.TOPPINGS_LOADING:
        return {...state, isLoading: true, errMess: null, toppings: []};
    case ActionTypes.TOPPINGS_FAILED:
        return {...state, isLoading: false, errMess: action.payload};
    default:
        return state;
}
};