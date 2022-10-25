import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import initialState from '../reducer';


const store = createStore(initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;