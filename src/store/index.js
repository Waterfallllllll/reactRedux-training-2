import { configureStore, combineReducers } from '@reduxjs/toolkit';
import heroes from '../reducers/heroes';
import filters from '../reducers/filters';

const enhancer = (createStore) => (...args) => {
    const store = createStore(...args);
    const oldDispatch = store.dispatch;

    store.dispatch = (action) => {
        if (typeof action === "string") {
            return oldDispatch({
                type: action
            })
        }
        return oldDispatch(action);
    }
    return store;
}

const store = configureStore({ reducer: combineReducers({ heroes, filters }), enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers().concat(enhancer),
 });

export default store;