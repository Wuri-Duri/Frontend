import { combineReducers } from 'redux';
import makeStory from './modules/makeStory';
import presetStory from './modules/presetStory';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({ makeStory, presetStory });
const store = configureStore({ reducer: rootReducer });

export default store;
