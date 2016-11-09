import { combineReducers } from 'redux'
import { messReducer } from './messReducer.js'

const rootReducer = combineReducers({
  messReducer:messReducer
})

module.exports = rootReducer