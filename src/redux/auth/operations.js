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
        const responce = await axios.post('/users/signup', credentials);
        setAuthHeader(responce.data.token);
        return responce.data;
    }
    catch(error) {
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
        return responce.data;
    }
    catch (error) {
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
        return thunkApi.rejectWithValue(error.message);
    }
});


//GET users/current

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkApi) => {
        const reduxState = thunkApi.getState();
        const savedToken = reduxState.auth.token;
        setAuthHeader(savedToken);

        try {
            const response = await axios.get('/users/current');
            return response.data;
        }
        catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    },
    {
        condition: (_, {getState}) => {
            const reduxState = getState();
            const savedToken = reduxState.auth.token;

            return savedToken !== null;
        }
    }
);