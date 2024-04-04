import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from 'react-hot-toast';


axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};


//POST user/signup
// {
//   "name": "Adrian Cross",
//   "email": "across@mail.com",
//   "password": "examplepwd12345"
// }
export const register = createAsyncThunk('auth/register', async (credentials, thunkApi) => { 
    try {
        const responce = await axios.post('/users/signup', credentials);
        setAuthHeader(responce.data.token);
        toast.success('Congratulations! You are registered!');
        return responce.data;
    }
    catch (error) {
        toast.error('Trouble registring!');
        return thunkApi.rejectWithValue(error.message);
    }
});


//POST users/login
// {
//   "email": "string",
//   "password": "string"
// }

export const login = createAsyncThunk('auth/login', async (credentials, thunkApi) => {
    try {
        const responce = await axios.post('/users/login', credentials);
        setAuthHeader(responce.data.token);
        toast.success('Congratulations! You are logged in!');
        return responce.data;
    }
    catch (error) {
        toast.error('Trouble logging in!');
        return thunkApi.rejectWithValue(error.message);
    }
});


//POST users/logout

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
    try {
        await axios.post('/users/logout');
        clearAuthHeader();
    }
    catch (error) {
        toast.error('Can`t log out!');
        return thunkApi.rejectWithValue(error.message);
    }
});


//GET users/current

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    const savedToken = reduxState.auth.token;

    setAuthHeader(savedToken);
    const response = await axios.get("/users/current");

    return response.data;
  },
  {
    condition: (_, { getState }) => {

      const reduxState = getState();
      const savedToken = reduxState.auth.token;

      return savedToken !== null;
    },
  }
);
