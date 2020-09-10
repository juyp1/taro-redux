import { TOPICSLIST, TOPICSLISTPAGE } from '../constants/home'
import { getJSON } from '../utils/request.js'

export function getTopicslist (params) {

  return async dispatch => {
    let result = await getJSON('/topics', params)
    if (result && result.data) {
      dispatch({ type: TOPICSLIST, playload: result.data.data })
    }
  }
}


export function getTopicslistPage (params) {
  if (params.page == 1) {
    params.page = params.page + 1
  }
  return async dispatch => {

    let result = await getJSON('/topics', params)

    if (result && result.data) {
      if (result.data.data.length > 0) {
        dispatch({ type: TOPICSLISTPAGE, playload: result.data.data })
      }

    }
  }
}

