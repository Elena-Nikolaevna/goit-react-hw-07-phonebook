import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
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
import { contactsReducer } from "./contactsSlice";

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

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);