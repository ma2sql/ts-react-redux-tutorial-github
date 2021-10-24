import { getUserProfileAsync } from "./actions";
//import { call, put, takeEvery } from "@redux-saga/core/effects";
import { takeEvery } from "@redux-saga/core/effects";
//import { getUserProfile, GithubProfile } from "../../api/github";
import { getUserProfile } from "../../api/github";
import { GET_USER_PROFILE } from "./actions";
import createAsyncSaga from "../../lib/createAsyncSaga";
// import { AxiosError } from "axios";

/*
function* getUserProfileSaga(action: ReturnType<typeof getUserProfileAsync.request>) {
    try {
        const userProfile: GithubProfile = yield call(getUserProfile, action.payload);
        yield put(getUserProfileAsync.success(userProfile));
    } catch(e) {
        yield put(getUserProfileAsync.failure(e as AxiosError));
    }
}
*/

const getUserProfileSaga = createAsyncSaga(getUserProfileAsync, getUserProfile);

export function* githubSaga() {
    yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
}