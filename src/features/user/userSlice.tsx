import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { LoginValues } from "../../pages/Login";
import AuthService from "../../services/auth" 

export interface UserState {
    username: string
    loading: string
}

export const login = createAsyncThunk('user/login', async ({username, password}: LoginValues, thunkAPI) => {
    try {
        const response = await AuthService.login(username, password);
        console.log(response);
        return response.username;
    } catch (error) {
        console.log("error: ", error);
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState: { username: '', loading: 'idle'},
    reducers: {},
    extraReducers: (builder) => {builder
        .addCase(login.fulfilled, (state, action) => {
            state.username = action.payload;
            state.loading = 'succeeded';
        })
        .addCase(login.rejected, (state, action) => {
            state.username = '';
            state.loading = 'failed';
        })
    }
})

const { reducer: userReducer } = userSlice;
export default userReducer;