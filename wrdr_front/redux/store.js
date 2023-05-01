import { combineReducers } from 'redux';
import makeStory from './modules/makeStory';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({ makeStory });
const store = configureStore({ reducer: rootReducer });

export default store;
