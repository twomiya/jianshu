import {createStore,applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk';
import reducer from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension'
const logger  = createLogger();
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk,logger)
))
export default store;