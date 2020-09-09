import { SHOWDAREW, CATEGORY,CHANGEDATA } from '../constants/menu'

const INITIAL_STATE = {
  showdarew: false,
  catedata: [],
  currindex:'job'
}

export default function counter (state = INITIAL_STATE, action) {
  console.log(action.type)
  switch (action.type) {

    case SHOWDAREW:
      return {
        ...state,
        showdarew:!state.showdarew
      }
    case CATEGORY:
      return {
        ...state,
        catedata: action.playload,
        
      }
      case CHANGEDATA:
        return {
          ...state,
          currindex:action.currindex
        }
    default:
      return state
  }
}
