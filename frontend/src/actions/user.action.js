
import { userConstants } from "./constants"
import axios from "../helpers/axios"; 

export const signup = (user) => { 

    console.log(user);

    
    return async (dispatch) => {

        dispatch( { type : userConstants.USER_REGISTER_REQUEST } ) ;

        const res = await axios.post('/signup' , {
            ...user
        });
    
    
        if (res.status === 200) {
            const { message } = res.data;

            dispatch({
                type : userConstants.USER_REGISTER_SUCCESS,
                payload : {
                    message
                }
            })
        }
        else {
            dispatch({
                type : userConstants.USER_REGISTER_FAILURE,
                payload : { error : res.data.error }
            })
        }

    }

}
