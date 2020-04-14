import * as types from "./actionTypes";

const initialLoginState = {
  username: "",
  password: "",
};

export const loginReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case types.INPUT_CHANGE:
        const key = action.payload.name
        return {
            ...state,
            [key]: action.payload.value
        };
    default:
      return state;
  }
};
