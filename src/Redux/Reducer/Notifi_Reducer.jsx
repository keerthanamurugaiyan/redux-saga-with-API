import { SET_NOTIFICATIONS, SET_SUCCESS_MESSAGE } from "../Action/Notifi_Action";

const initialState = {
  notifications: [],
  successMessage: ''
};

const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTIFICATIONS:
      return { ...state, notifications: action.payload };
    case SET_SUCCESS_MESSAGE:
      return { ...state, successMessage: action.payload };
    default:
      return state;
  }
};

export default notificationsReducer;
