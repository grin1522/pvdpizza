import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { AboutInfo } from './aboutInfo';
import { Pizza } from './pizza';
import { Salads } from './salads';
import { Starters } from './starters';
import { Toppings } from './toppings';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            aboutInfo: AboutInfo,
            pizza: Pizza,
            salads: Salads,
            starters: Starters,
            toppings: Toppings
        }),       
        applyMiddleware(thunk, logger)
    );

    return store;
}