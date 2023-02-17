import { postConstants } from "../actions/constants"
 
const initState = {
    error: null,
    message: '',
    loading: false
}

export default (state = initState, action) => {
    switch(action.type){
        case postConstants.POST_REGISTER_REQUEST:
            state = {
                ...state,
                loading : true
            }
            break;

        case postConstants.POST_REGISTER_SUCCESS:
            state = {
                ...initState,
                loading : false
            }
            break;

        case postConstants.POST_REGISTER_FAILURE:
            state = {
                ...state,
                loading : false,
                error : action.payload.error
            }
            break;
            
    }

    return state;
}


