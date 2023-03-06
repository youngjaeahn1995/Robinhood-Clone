import { configureStore } from "@reduxjs/toolkit";
import userReducer, { UserState } from "../features/user/userSlice";

export interface State {
    user: UserState
}

const reducer = {
    user: userReducer
}

const store = configureStore({
    reducer
})

export type AppDispatch = typeof store.dispatch
export default store;