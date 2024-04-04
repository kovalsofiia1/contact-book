import { configureStore } from "@reduxjs/toolkit";
import { contactsSliceReducer } from "./contacts/slice";
import { filtersSliceReducer } from "./filters/slice";
import { authSliceReducer } from './auth/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const authPersistConfig = {
  key: 'authSlice',
  storage,
  whitelist: ["token"],
}
 
const persistedReducer = persistReducer(authPersistConfig, authSliceReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsSliceReducer,
    filter: filtersSliceReducer,
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);