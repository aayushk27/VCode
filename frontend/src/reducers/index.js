import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import userReducer from "./user.reducer";
import postReducer from './post.reducer';
import allPostReducer from './getposts.reducer';

const rootReducer = combineReducers({
    auth : authReducer,
    user : userReducer,
    post : postReducer,
    allPost : allPostReducer
})

export default rootReducer;
