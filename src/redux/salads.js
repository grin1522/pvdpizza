import * as ActionTypes from './ActionTypes';

export const Salads = (state = {
    isLoading: true,
    errMess: null,
    salads: []
}, action) => {
switch (action.type) {
    case ActionTypes.ADD_SALADS:
        return {...state, isLoading: false, errMess: null, salads: action.payload};
    case ActionTypes.SALADS_LOADING:
        return {...state, isLoading: true, errMess: null, salads: []};
    case ActionTypes.SALADS_FAILED:
        return {...state, isLoading: false, errMess: action.payload};
    default:
        return state;
}
};