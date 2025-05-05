// // notificationSaga.js
// import { call, put, takeLatest, delay, fork } from 'redux-saga/effects';
// import { POST_PRODUCT, POST_PRODUCT_SUCCESS } from './Notifi_Action';
// import { getNotificationsAPI, postProductAPI } from './NotificationAPi';

// // function* postProductSaga(action) {
// //   try {
// //     yield call(postProductAPI, action.payload);
// //     yield put({ type: POST_PRODUCT_SUCCESS });
// //   } catch (error) {
// //     console.error('Post failed:', error);
// //   }
// // }

// function* postProductSaga(action) {
//   try {
//     yield call(postProductAPI, action.payload);
//     yield put({ type: POST_PRODUCT_SUCCESS });

//     // 🟢 Fetch latest notifications immediately
//     const response = yield call(getNotificationsAPI);
//     yield put({ type: 'SET_NOTIFICATIONS', payload: response.data });

//   } catch (error) {
//     console.error('Post failed:', error);
//   }
// }

// function* fetchNotificationsSaga() {
//     while (true) {
//       try {
//         const response = yield call(getNotificationsAPI);
//         yield put({ type: 'SET_NOTIFICATIONS', payload: response.data });
//         console.log("Fetched notifications:", response.data);
//       } catch (e) {
//         console.error('Notification fetch failed:', e);
//       }
//       yield delay(3000); // Poll every 3s
//    }
//   } 
  

// // function* fetchNotificationsSaga() {
// //   while (true) {
// //     try {
// //       const response = yield call(getNotificationsAPI);
// //       yield put({ type: 'SET_NOTIFICATIONS', payload: response.data });
// //     } catch (e) {
// //       console.error('Notification fetch failed:', e);
// //     }
// //     yield delay(3000); // only one loop keeps running
// //   }
// // }

// export default function* rootSaga() {
//   yield takeLatest(POST_PRODUCT, postProductSaga);
//   yield fork(fetchNotificationsSaga); // only one subscription starts on app load
// }