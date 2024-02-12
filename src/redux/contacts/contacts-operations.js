import * as contactsApi from '../../api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  addContactsLoading,
  addContactsSuccess,
  addContactsError,
} from './contacts-slice';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await contactsApi.requestFetchContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// export const addContact = body => {
//   const func = async dispatch => {
//     try {
//       dispatch(addContactsLoading());
//       const { data } = await contactsApi.requestAddContacts(body);
//       dispatch(addContactsSuccess(data));
//     } catch (error) {
//       dispatch(addContactsError(error.message));
//     }
//   };

//   return func;
// };

export const addContact = createAsyncThunk(
  'contacts/add',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await contactsApi.requestAddContacts(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await contactsApi.requestDeleteContacts(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
