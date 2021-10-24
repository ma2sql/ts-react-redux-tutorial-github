import { getUserProfileAsync } from "./actions";
import { getUserProfile } from "../../api/github";
import createAsyncThunk from "../../lib/createAsyncThunk";

/*
export function getUserProfileThunk(username: string) {
    return async (dispatch: Dispatch) => {
        const { request, success, failure } = getUserProfileAsync;
        dispatch(request());
        try {
            const userProfile = await getUserProfile(username);
            dispatch(success(userProfile));
        } catch(e) {
            // Argument of type 'unknown' is not assignable to parameter of type 'AxiosError<unknown, any>'.
            // dispatch(failure(e));
            dispatch(failure(e as AxiosError));
        }
    };
}
*/

export const getUserProfileThunk = createAsyncThunk(getUserProfileAsync, getUserProfile);