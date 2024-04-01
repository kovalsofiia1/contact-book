import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
        console.log(credentials);
        const responce = await axios.post('/users/signup', credentials);
        console.log(responce);
        setAuthHeader(responce.data.token);
        return responce.data;
    }
    catch(error) {
        console.log(error, thunkApi);
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
        console.log(credentials);
        const responce = await axios.post('/users/login', credentials);
        console.log(responce);
        setAuthHeader(responce.data.token);
        return responce.data;
    }
    catch (error) {
        console.log(error);
        return thunkApi.rejectWithValue(error.message);
    }
});


//POST users/logout

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
    try {
        const response = await axios.post('/users/logout');
        clearAuthHeader();
        console.log(response);
    }
    catch (error) {
        console.log(error);
        return thunkApi.rejectWithValue(error.message);
    }
});