import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import  { gameReducer }  from '../reducers';
import { createLogger } from 'redux-logger';


const rootReducer =  gameReducer;

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(createLogger({ collapsed: true }))));
