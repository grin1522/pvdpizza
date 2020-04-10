import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchAboutInfo = () => dispatch => {
    dispatch(aboutInfoLoading());

    return fetch(baseUrl + 'aboutInfo')
    .then(response => {
            if (response.ok) {
                 return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        }
    )
    .then(response => response.json())
    .then(aboutInfo => dispatch(addAboutInfo(aboutInfo)))
    .catch(error => dispatch(aboutInfoFailed(error.message)));
};

export const aboutInfoLoading = () => ({
    type: ActionTypes.ABOUT_INFO_LOADING
});

export const aboutInfoFailed = errMess => ({
    type: ActionTypes.ABOUT_INFO_FAILED,
    payload: errMess
});

export const addAboutInfo = aboutInfo => ({
    type: ActionTypes.ADD_ABOUT_INFO,
    payload: aboutInfo
});