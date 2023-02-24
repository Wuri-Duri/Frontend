import { combineReducers } from 'redux';
import preset from './modules/preset';
import makestory from './modules/makestory';
import { configureStore } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({ preset, makestory });
export const store = configureStore({ reducer: rootReducer });

export default store;
