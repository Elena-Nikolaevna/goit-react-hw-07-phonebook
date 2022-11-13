import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
//import { persistReducer } from 'redux-persist';
//import storage from 'redux-persist/lib/storage';
//import { contactsSlice } from 'redux/contactsSlice';
import  contactsReducer  from './phonebook/reducers';
import logger from 'redux-logger';

/* const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};
 */
/* export const persisteContactReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
); */

const store = configureStore({
  reducer: { phonebook: contactsReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
