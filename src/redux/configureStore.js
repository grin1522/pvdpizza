import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { AboutInfo } from './aboutInfo';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            aboutInfo: AboutInfo
        }),       
        applyMiddleware(thunk, logger)
    );

    return store;
}