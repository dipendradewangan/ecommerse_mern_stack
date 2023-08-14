import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { amountReducer } from './reducer/reducer'

let reducer = combineReducers({amount : amountReducer})

export const store = createStore(reducer, applyMiddleware(logger, thunk))