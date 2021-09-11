import JsonApi from "../APIs/JsonApi";
import _ from "lodash";
/*
const fetchPosts = async function () {
  // * FIXME: bad Approach to fetch data redux want the action to be pure plain object async and await
  // * TODO : WHAT IS middleware? after dispatch the action, it will be passed to middleware and then to reducer
  // * middleware is a function that will be called after the action is dispatched
  // * redux thunk middleware is a middleware that allows us to return a function from our action creators and call it automatically
  // * or return an object like a normal action
  // * function that will be returned from action creator and called automatically by redux thunk middleware take two arguments
 ! FIXME  
                ! 1- dispatch
                ! 2- getState
            ! we manually dispatch the action to the reducer using dispatch arg of the function    

  const promise = await JsonApi.get(`/posts`);
  return {
    type: "FETCH_POSTS",
    payload: promise.data,
  };
};
*/
const fetchPosts = () => async (dispatch) => {
  const { data: response } = await JsonApi.get(`/posts`);

  dispatch({
    type: "FETCH_POSTS",
    payload: response,
  });
};

const fetchUser = (id) => async (dispatch, myState) => {
  const { data: response } = await JsonApi.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response });
  console.log(myState().user);
};
/*
const _fetchUser = _.memoize(async (id, dispatch) => {
  const { data: response } = await JsonApi.get(`/users/${id}`);
  return dispatch({ type: "FETCH_USER", payload: response });
});
const fetchUser = (id) => async (dispatch) => _fetchUser(id, dispatch);
*/
const fetchPostAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  // await dispatch(fetchUser());
  // const uniqueIds = _.uniq(_.map(getState().post, "userId"));
  // const uniqueIds = new Set(_.map(getState().post, "userId"));
  // console.log(uniqueIds);
  // low dash library
  _.chain(getState().post)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};
export { fetchPosts, fetchUser, fetchPostAndUsers };
