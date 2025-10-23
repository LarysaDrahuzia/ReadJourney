import { configureStore, combineReducers } from '@reduxjs/toolkit';
import filtersReducer from './filters/slice.js';

import carsReducer from './cars/slice.js';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// за замовчуванням використовує localStorage
import storage from 'redux-persist/lib/storage';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['cars'], // тільки cars буде збережено
};

const rootReducer = combineReducers({
  cars: carsReducer,
  filters: filtersReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        // виключаємо екшени redux-persist із перевірки
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
