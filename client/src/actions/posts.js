import * as api from '../api';

// Action Creators functions that return action
// // Redux thunk allows async calls utilizing dispatch instead of return
export const getPosts = () => async (dispatch) => {

    try {
        // data is response data from api call, data represents posts
        const { data } = await api.featchPosts();
        dispatch({type: 'FETCH_ALL', payload: data});

    } catch(error) {
        console.log(error.message);
    }

    const action = { type: 'FETCH_ALL', payload: [] }

}