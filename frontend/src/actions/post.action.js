
import { postConstants } from "./constants"
import axios from "../helpers/axios"; 

export const postM = (post) => {

    console.log(post);

    return async (dispatch) => {

        try {

            dispatch({ type: postConstants.POST_REGISTER_REQUEST });

            const res = await axios.post('/createPost', {
                ...post
            });


            if (res.status === 200) {
                const { message } = res.data;

                dispatch({
                    type: postConstants.POST_REGISTER_SUCCESS,
                    payload: {
                        message
                    }
                })
            }
            else {
                dispatch({
                    type: postConstants.POST_REGISTER_FAILURE,
                    payload: { error: res.data.error }
                })
            }
        }
        catch (error) {
            console.log(error);
        }

    }

}
