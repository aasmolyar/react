import { authAPI } from "../../API/API";
import { stopSubmit } from "redux-form";
import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {
  initiolized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initiolized: true,
      };
    default:
      return state;
  }
};

export const initiolizedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

export const initiolizeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());
  promise.then(() => {
    dispatch(initiolizedSuccess());
  });
};

export default appReducer;
