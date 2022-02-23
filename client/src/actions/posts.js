import * as api from '../api';

// Action Creators functions that return action
// // Redux thunk allows async calls utilizing dispatch instead of return
export const getPosts = () => async (dispatch) => {

    try {
        // data is response data from api call, data represents posts
        const { data } = await api.featchPosts();
        dispatch({type: 'FETCH_ALL', payload: data});

    } catch(error) {
        console.log(error);
    }

    const action = { type: 'FETCH_ALL', payload: [] }

}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({type: 'DELETE', payload: id});
    } catch (error) {
        console.log(error);
    }
}