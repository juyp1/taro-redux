import { TOPICSLIST } from '../constants/home'

const INITIAL_STATE = {
  params: {
    page: 1,
    tab: '',
    limit: 20,
    mdrender: 'false'
  },
  list: []


}

export default function counter (state = INITIAL_STATE, action) {
 
  switch (action.type) {  

    case TOPICSLIST:
      return {
        ...state,
        list: action.playload
      }
    default:
      return state
  }
}
