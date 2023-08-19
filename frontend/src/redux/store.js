import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { productReducer } from './reducer/productReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

let reducer = combineReducers({ products : productReducer })

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger, thunk)))