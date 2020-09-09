import { combineReducers } from 'redux'
import counter from './counter'
import menu from './menu'
import home from './home'

export default combineReducers({
  counter,
  menu,
  home
})
