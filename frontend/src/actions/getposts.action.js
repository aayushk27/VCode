import axios from "../helpers/axios"; 
import { allPostsConstants } from "./constants";

export const getAllposts = () => {

    return async (dispatch) => {

        dispatch ({
            type : allPostsConstants.ALL_POSTS_REQUEST
        });

        const res = await axios.get('/getPost');
        console.log("RES " + res.data);

        
        if (res.status === 200) {
            
            dispatch ({
                type : allPostsConstants.ALL_POSTS_SUCCESS,
                payload : { allPosts : res.data }
            });
        }
        else {
            dispatch ({
                type : allPostsConstants.ALL_POSTS_FAILURE,
                payload : { error : res.data.error }
            })
        }
    }
}