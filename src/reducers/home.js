import { TOPICSLIST, TOPICSLISTPAGE } from '../constants/home'

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
    case TOPICSLISTPAGE:
       
      state.params.page = state.params.page+1
      console.log(' state.params.page', state.params.page)
      return {
        ...state,
        list: state.list.concat(action.playload)
      }
    default:
      return { ...state }
  }
}
