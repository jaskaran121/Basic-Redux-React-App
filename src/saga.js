import { call, put, takeEvery, takeLatest,all } from 'redux-saga/effects'
import Api from './Services/apiservices';

// Actions
function* fetchPosts(action) {
    try {
        const posts = yield call(Api.fetchPostsAPI);
        yield put({type: "FETCH_POSTS", payload: posts.data});
     } catch (e) {
        
     }
}

function* newPost(action) {
  try {
      const posts = yield call(Api.createPostAPI,action.payload);
      yield put({type: "NEW_POST", payload: posts.data});
   } catch (e) {
      
   }
}

function* fetchSaga() {
  yield takeEvery("Fetch_Posts_Action", fetchPosts);
}

function* newPostSaga() {
  yield takeEvery("New_Post_Action", newPost);
}


export default function* rootSaga() {
  yield all([
    fetchSaga(),
    newPostSaga()
  ])
}