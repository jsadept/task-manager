import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import reducers from './reducers';
import {loadState} from "../db/browser-storage";

const rootReducer = combineReducers(reducers)


export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;