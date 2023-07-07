import { combineReducers } from 'redux';
import makeStory, { makeStorySaga } from './makeStory';
import presetStory, { presetStorySaga } from './presetStory';
import ticket, { ticketSaga } from './ticket';
import { configureStore } from '@reduxjs/toolkit';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({ makeStory, presetStory, ticket });
export function* rootSaga() {
  yield all([makeStorySaga(), presetStorySaga(), ticketSaga()]);
}
const store = configureStore({ reducer: rootReducer });

export default store;
