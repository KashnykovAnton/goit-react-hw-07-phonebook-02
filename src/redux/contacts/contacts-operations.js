// import { createAsyncThunk } from '@reduxjs/toolkit';
import { contactsActions } from '.';
import { contactsAPI } from 'services';

export const fetchContact = () => async dispatch => {
  dispatch(contactsActions.fetchContactRequest());
  try {
    const data = await contactsAPI.fetchContacts();
    dispatch(contactsActions.fetchContactSuccess(data));
  } catch (error) {
    dispatch(contactsActions.fetchContactError(error));
  }
};

// export const fetchContact = createAsyncThunk(
//   'contacts/fetchContact',
//   async () => {
//     const data = await contactsAPI.fetchContacts();
//     return data;
//   },
// );

export const addContact = item => async dispatch => {
  dispatch(contactsActions.addContactRequest());
  try {
    const data = await contactsAPI.fetchAddContact(item);
    dispatch(contactsActions.addContactSuccess(data));
  } catch (error) {
    dispatch(contactsActions.addContactError(error));
  }
};

export const deleteContact = id => async dispatch => {
  console.log('id: ', id);
  dispatch(contactsActions.deleteContactRequest());
  try {
    const data = await contactsAPI.fetchDeleteContact(id);
    console.log('data in Del :', data);
    dispatch(contactsActions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(contactsActions.deleteContactError(error));
  }
};

export const filterContact = name => dispatch => {
  dispatch(contactsActions.filterContactRequest());
  try {
    dispatch(contactsActions.filterContactSuccess(name));
  } catch (error) {
    dispatch(contactsActions.filterContactError(error));
  }
};
