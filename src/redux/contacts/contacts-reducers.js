import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { contactsActions } from '.';

const contacts = createReducer([], {
  [contactsActions.fetchContactSuccess]: (_, action) => action.payload,
  [contactsActions.addContactSuccess]: (state, action) => [
    ...state,
    action.payload,
  ],
  [contactsActions.deleteContactSuccess]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const filter = createReducer('', {
  [contactsActions.filterContactSuccess]: (_, action) => action.payload,
});

const loading = createReducer(false, {
  [contactsActions.fetchContactRequest]: () => true,
  [contactsActions.fetchContactSuccess]: () => false,
  [contactsActions.fetchContactError]: () => false,
  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,
  [contactsActions.deleteContactRequest]: () => true,
  [contactsActions.deleteContactSuccess]: () => false,
  [contactsActions.deleteContactError]: () => false,
  [contactsActions.filterContactRequest]: () => true,
  [contactsActions.filterContactSuccess]: () => false,
  [contactsActions.filterContactError]: () => false,
});

const error = createReducer(null, {
  [contactsActions.fetchContactError]: (_, action) => action.payload,
  [contactsActions.fetchContactRequest]: () => null,
  [contactsActions.addContactError]: (_, action) => action.payload,
  [contactsActions.addContactRequest]: () => null,
  [contactsActions.deleteContactError]: (_, action) => action.payload,
  [contactsActions.deleteContactRequest]: () => null,
  [contactsActions.filterContactError]: (_, action) => action.payload,
  [contactsActions.filterContactRequest]: () => null,
});

export const contactReducer = combineReducers({
  contacts,
  filter,
  loading,
  error,
});
