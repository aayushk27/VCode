import { allPostsConstants } from "../actions/constants"
 
const initState = {
    error: null,
    allPosts: [],
    loading: false
}

export default (state = initState, action) => {
    switch(action.type){
        case allPostsConstants.ALL_POSTS_REQUEST:
            state = {
                ...state,
                loading : true
            }
            break;

        case allPostsConstants.ALL_POSTS_SUCCESS:
            state = {
                ...state,
                allPosts: action.payload.allPosts,
                loading : false
            }
            break;

        case allPostsConstants.ALL_POSTS_FAILURE:
            state = {
                ...state,
                loading : false,
                error : action.payload.error
            }
            break;
            
    }

    return state;
}


