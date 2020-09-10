import { combineReducers } from 'redux'
import counter from './counter'
import menu from './menu'
import home from './home'
import users from './users'

export default combineReducers({
  counter,
  menu,
  home,
  users
})
