import * as ActionTypes from './ActionTypes';

export const AboutInfo = (state = {
    isLoading: true,
    errMess: null,
    aboutInfo: []
    }, action) => {
        switch (action.type) {
            case ActionTypes.ADD_ABOUT_INFO:
                return {...state, isLoading: false, errMess: null, aboutInfo: action.payload};
            case ActionTypes.ABOUT_INFO_LOADING:
                return {...state, isLoading: true, errMess: null, aboutInfo: []};
            case ActionTypes.ABOUT_INFO_FAILED:
                return {...state, isLoading: false, errMess: action.payload};
            default:
                return state;
        }
};