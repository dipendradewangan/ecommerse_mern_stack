import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

// imported reducers
import { productReducer } from './reducer/productReducer'
import { userReducer } from './reducer/userReducer'

let reducer = combineReducers({ products : productReducer, users : userReducer})

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger, thunk)))