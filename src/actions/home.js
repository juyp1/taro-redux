import { TOPICSLIST } from '../constants/home'
import { getJSON } from '../utils/request.js'

export function getTopicslist (params) {

  return async dispatch => {
    let result = await getJSON('/topics', params)
    if(result && result.data){
      dispatch({type:TOPICSLIST,playload:result.data.data})
    }
  }
}