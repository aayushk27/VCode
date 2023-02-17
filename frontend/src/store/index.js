import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from '../reducers/index'

const store = createStore(rootReducer , applyMiddleware(thunk) ); // takes 2 arguments --> 1st callback function   2nd middleware 

export default store;
