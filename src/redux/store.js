import { configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
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

import { authReducer } from './auth/authSlice';
import { recommendedFoodReducer } from './recommendedFood/recommendedFoodSlice';
import { diaryReducer } from './diary/diarySlice';
import { statisticsReducer } from './statistics/statisticsSlice';
import { waterReducer } from './water/waterSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    diary: diaryReducer,
    statistics: statisticsReducer,
    water: waterReducer,
    recommendedFood: recommendedFoodReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
