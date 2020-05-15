import * as ActionTypes from './ActionTypes';

export const Pizza = (state = {
    isLoading: true,
    errMess: null,
    pizza: []
}, action) => {
switch (action.type) {
    case ActionTypes.ADD_PIZZA:
        return {...state, isLoading: false, errMess: null, pizza: action.payload};
    case ActionTypes.PIZZA_LOADING:
        return {...state, isLoading: true, errMess: null, pizza: []};
    case ActionTypes.PIZZA_FAILED:
        return {...state, isLoading: false, errMess: action.payload};
    default:
        return state;
}
};