import { profileAPI, usersAPI } from "../../API/API";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "UPDATE_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you", likesCount: 12 },
    { id: 2, message: "Hi, how are you", likesCount: 14 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 3,
      };
      return { ...state, posts: [...state.posts, newPost], newPostText: "" };
    }

    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => {
  return { type: ADD_POST, newPostText };
};

export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};

export const setStatus = (status) => {
  return { type: SET_STATUS, status };
};

export const getUserProfile = (userId) => (dispatch) => {
  return usersAPI.getProfile(userId).then((responce) => {
    dispatch(setUserProfile(responce.data));
  });
};

export const getStatus = (userId) => (dispatch) => {
  return profileAPI.getStatus(userId).then((responce) => {
    dispatch(setStatus(responce.data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  return profileAPI.updateStatus(status).then((responce) => {
    if (responce.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export default profileReducer;
