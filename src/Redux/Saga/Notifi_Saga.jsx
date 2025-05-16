import { call, put, takeLatest, delay, fork } from 'redux-saga/effects';
import { POST_PRODUCT, POST_PRODUCT_SUCCESS, SET_NOTIFICATIONS, SET_SUCCESS_MESSAGE, } from '../Action/Notifi_Action'; 
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
    yield call(postProductAPI, action.payload);
    yield put({ type: POST_PRODUCT_SUCCESS });

    // 🔁 Refresh notifications after post
    const response = yield call(getNotificationsAPI);
    yield put({ type: SET_NOTIFICATIONS, payload: response.data });

    // ✅ Show success message for popup
    yield put({
      type: SET_SUCCESS_MESSAGE,
      payload: '✅ Product posted and notification sent.',
    });

  } catch (error) {
    console.error('Post Product Error:', error);
  }
}

// ✅ Only one default export!
export default function* NotificationSaga() {
  yield takeLatest(POST_PRODUCT, postProductSaga);
  yield fork(fetchNotificationsSaga);
}
