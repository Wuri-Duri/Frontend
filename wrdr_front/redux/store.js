import { combineReducers } from 'redux';
import makeStory, { makeStorySaga } from './modules/makeStory';
import presetStory, { presetStorySaga } from './modules/presetStory';
import ticket, { ticketSaga } from './modules/ticket';
import { configureStore } from '@reduxjs/toolkit';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({ makeStory, presetStory, ticket });
export function* rootSaga() {
  yield all([makeStorySaga(), presetStorySaga(), ticketSaga()]);
}
const store = configureStore({ reducer: rootReducer });

export default store;
