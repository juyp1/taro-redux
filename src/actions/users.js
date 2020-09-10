import { SUCCESSACCESS,ERRORACCESS } from '../constants/users'
import {postJSON } from '../utils/request.js'

export function userAccesstoken (data) {

  return async dispatch => {
    let result = await postJSON('/accesstoken', data)
    if (result.data.success) {
      console.log('dispatch',result.data)
      dispatch({ type: SUCCESSACCESS, playload: result.data})
    }else {
      dispatch({ type: ERRORACCESS, playload: result.data })
    }
  }
}
