import { combineReducers } from 'redux';
import makeStory from './modules/makeStory';
import { configureStore } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({ makeStory });
export const store = configureStore({ reducer: rootReducer });

export default store;
