import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { saveToken, getToken, removeToken } from "../utils/localStorage";
import axios from "axios";

const baseURL = 'http://localhost:3000/api/v1';
const makeApiCall = async (endpoint, user, thunkAPI) => {
  try {
    const response = await axios.post(`${baseURL}${endpoint}`,
      { 
        user : user
      });

    const data = await response.data;

    if (response.status === 201 || response.status === 200) {
      console.log(data.message)
      return data;
    }

  } catch (error) {
    if (error.response && (error.response.status === 401 || error.response.status === 422)) {
      return thunkAPI.rejectWithValue(error.response.data.errors[0]);
    }
    return thunkAPI.rejectWithValue(error.response?.data.errors || "Unknown error");
  }
};

const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    console.log('the user', user);
    const data = await makeApiCall('/users', user, thunkAPI)
    return data.user
  }
);

const logInUser = createAsyncThunk(
  'user/logInUser',
  async (user, thunkAPI) => makeApiCall('/users/sign_in', user, thunkAPI)
);

const storedToken = getToken();


const initialState = {
  user: null,
  isAuthenticated: Boolean(storedToken),
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signout: (state) => {
      removeToken();
      localStorage.removeItem('userId');
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.data;
        console.log(state.user)
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.payload;
      })

      .addCase(logInUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        console.log('the payload: ', action.payload);
        localStorage.setItem('userId', action.payload.user.id)
        saveToken(action.payload.token)
      })
      .addCase(logInUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.payload;
      });
  },
});

const { signout } = userSlice.actions;
export { registerUser, logInUser, signout };
export default userSlice.reducer;
