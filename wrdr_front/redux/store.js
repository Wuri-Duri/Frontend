import { combineReducers } from 'redux';
import presetReducer from './modules/preset';
import makestoryReducer from './modules/makestory';
import { configureStore } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({ presetReducer, makestoryReducer });
export const store = configureStore({ reducer: rootReducer });

export default store;
