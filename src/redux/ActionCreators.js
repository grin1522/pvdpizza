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

export const fetchPizza = () => dispatch => {
    dispatch(pizzaLoading());

    return fetch(baseUrl + 'pizza')
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
    .then(pizza => dispatch(addPizza(pizza)))
    .catch(error => dispatch(pizzaFailed(error.message)));
};

export const pizzaLoading = () => ({
    type: ActionTypes.PIZZA_LOADING
});

export const pizzaFailed = errMess => ({
    type: ActionTypes.PIZZA_FAILED,
    payload: errMess
});

export const addPizza = pizza => ({
    type: ActionTypes.ADD_PIZZA,
    payload: pizza
});

export const fetchSalads = () => dispatch => {
    dispatch(saladsLoading());

    return fetch(baseUrl + 'salads')
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
    .then(salads => dispatch(addSalads(salads)))
    .catch(error => dispatch(saladsFailed(error.message)));
};

export const saladsLoading = () => ({
    type: ActionTypes.SALADS_LOADING
});

export const saladsFailed = errMess => ({
    type: ActionTypes.SALADS_FAILED,
    payload: errMess
});

export const addSalads = salads => ({
    type: ActionTypes.ADD_SALADS,
    payload: salads
});

export const fetchStarters = () => dispatch => {
    dispatch(startersLoading());

    return fetch(baseUrl + 'starters')
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
    .then(starters => dispatch(addStarters(starters)))
    .catch(error => dispatch(startersFailed(error.message)));
};

export const startersLoading = () => ({
    type: ActionTypes.STARTERS_LOADING
});

export const startersFailed = errMess => ({
    type: ActionTypes.STARTERS_FAILED,
    payload: errMess
});

export const addStarters = starters => ({
    type: ActionTypes.ADD_STARTERS,
    payload: starters
});

export const fetchToppings = () => dispatch => {
    dispatch(toppingsLoading());

    return fetch(baseUrl + 'toppings')
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
    .then(toppings => dispatch(addToppings(toppings)))
    .catch(error => dispatch(toppingsFailed(error.message)));
};

export const toppingsLoading = () => ({
    type: ActionTypes.TOPPINGS_LOADING
});

export const toppingsFailed = errMess => ({
    type: ActionTypes.TOPPINGS_FAILED,
    payload: errMess
});

export const addToppings = toppings => ({
    type: ActionTypes.ADD_TOPPINGS,
    payload: toppings
});