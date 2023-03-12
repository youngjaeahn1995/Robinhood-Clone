import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { LoginValues } from "../../pages/Login";
import AuthService from "../../services/auth" 

export interface UserState {
    username: string
    loading: string
}

export const login = createAsyncThunk('user/login', async (loginValues: LoginValues, thunkAPI) => {
    if (!loginValues)
        return localStorage.getItem("user");

    return await AuthService.loginAPI(loginValues!.username, loginValues!.password);
})

const userSlice = createSlice({
    name: 'user',
    initialState: { username: '', stocks: [], loading: 'idle'},
    reducers: {},
    extraReducers: (builder) => {builder
        .addCase(login.fulfilled, (state, action) => {
            state.username = action.payload.username;
            state.stocks = action.payload.stocks;
            state.loading = 'succeeded';
        })
        .addCase(login.rejected, (state, action) => {
            state.username = '';
            state.stocks = [];
            state.loading = 'failed';
        })
    }
})

const { reducer: userReducer } = userSlice;
export default userReducer;