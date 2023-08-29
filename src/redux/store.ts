import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { userReducer, categoriesReducer, donationsReducer } from './slices';
import { logger } from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  donations: donationsReducer,
});

const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

const persistedReducer = persistReducer(configuration, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    });
  }
});

export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
export default store;
