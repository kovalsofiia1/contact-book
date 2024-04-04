import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from 'react-hot-toast';


export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
  try {
        const response = await axios.get("/contacts");
        return response.data;
  } catch (e) {
       toast.error('Sorry! Can`t find your contacts!');
        return thunkAPI.rejectWithValue(e.message);
  }
});

export const addContact = createAsyncThunk(
  "contacts/addContact",
    async(newContact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", newContact );
      return response.data;
    } catch (e) {
      toast.error('Trouble adding contact!');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      toast.error('Can`t delete contact!');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
