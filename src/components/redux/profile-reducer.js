import { usersAPI } from "../../API/API";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "UPDATE_USER_PROFILE";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you", likesCount: 12 },
    { id: 2, message: "Hi, how are you", likesCount: 14 },
  ],
  newPostText: "",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 3,
      };
      return { ...state, posts: [...state.posts, newPost], newPostText: "" };
    }

    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};
export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};
export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};
export const getUserProfile = (userId) => (dispatch) => {
  return usersAPI.getProfile(userId).then((responce) => {
    dispatch(setUserProfile(responce.data));
  });
};

export default profileReducer;
