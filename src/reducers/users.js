import { SUCCESSACCESS, ERRORACCESS } from '../constants/users'

const INITIAL_STATE = {

  result: {},// 结果
  status: false,
}

export default function counter (state = INITIAL_STATE, action) {

  switch (action.type) {

    case SUCCESSACCESS:
      return {
        ...state,
        result: action.playload,
        status: true
      }
    case ERRORACCESS:
      return {
        ...state,
        result: action.playload,
        status: false
      }

    default:
      return { ...state }
  }
}
