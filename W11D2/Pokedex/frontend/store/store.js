import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer.js';
import logger from 'redux-logger';
import { thunk } from '../middleware/thunk';

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk, logger));
}

// const configureStore = (preLoadedState = {}) => {
//     return createStore(rootReducer, preLoadedState, applyMiddleware(thunk, logger)); //we will be returning an empty object for now... tbc
//   };

export default configureStore;