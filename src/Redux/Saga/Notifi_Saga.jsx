import { call, put, takeLatest, delay, fork } from 'redux-saga/effects';
import { POST_PRODUCT, POST_PRODUCT_SUCCESS, SET_ERROR_MESSAGE, SET_NOTIFICATIONS, SET_SUCCESS_MESSAGE, } from '../Action/Notifi_Action'; 
import { getNotificationsAPI, postProductAPI } from '../../Services/Notifi_Api';

function* fetchNotificationsSaga() {
  while (true) {
    try {
      const response = yield call(getNotificationsAPI);
      yield put({ type: SET_NOTIFICATIONS, payload: response.data });
      console.log("Fetched notifications:", response.data);
    } catch (e) {
      console.error('Notification fetch failed:', e);
    }
    yield delay(3000);
  }
}

function* postProductSaga(action) {
  try {
    const response = yield call(postProductAPI, action.payload);
    yield put({ type: POST_PRODUCT_SUCCESS });

    const notifRes = yield call(getNotificationsAPI);

    yield put({ type: SET_NOTIFICATIONS, payload: notifRes.data.notifications });

    yield put({
      type: SET_SUCCESS_MESSAGE,
      payload: response?.data?.message || '✅ Product posted successfully.',
    });

  } catch (error) {
    yield put({
      type: SET_ERROR_MESSAGE,
      payload: error?.response?.data?.message || '❌ Failed to post product.',
    });
  }
}

export default function* NotificationSaga() {
  yield takeLatest(POST_PRODUCT, postProductSaga);
  yield fork(fetchNotificationsSaga);
}