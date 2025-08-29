// Action Types
export const POST_PRODUCT = 'POST_PRODUCT';
export const POST_PRODUCT_SUCCESS = 'POST_PRODUCT_SUCCESS';
export const FETCH_NOTIFICATIONS = 'FETCH_NOTIFICATIONS';
export const SET_NOTIFICATIONS = 'SET_NOTIFICATIONS';
export const SET_SUCCESS_MESSAGE = 'SET_SUCCESS_MESSAGE';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';

// Action Creators
export const postProduct = (payload) => ({
  type: POST_PRODUCT,
  payload
});

export const fetchNotifications = () => ({
  type: FETCH_NOTIFICATIONS
});

export const setNotifications = (payload) => ({
  type: SET_NOTIFICATIONS,
  payload
});
