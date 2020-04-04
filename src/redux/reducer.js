import { PIZZA } from '../shared/pizza';
import { SALADS } from '../shared/salads';
import { STARTERS } from '../shared/starters';
import { TOPPINGS } from '../shared/toppings';

export const initialState = {
    pizza: PIZZA,
    salads: SALADS,
    starters: STARTERS,
    toppings: TOPPINGS
};

export const Reducer = (state = initialState, action) => {
    return state;
};