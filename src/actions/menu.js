import { SHOWDAREW, CATEGORY } from '../constants/menu'

export function showDreawer () {

  return dispatch => {
    dispatch({ type: SHOWDAREW })
  }
}

export function cateGoryList (index) {
  console.log(index)
  return dispatch => {
    dispatch({ type: CATEGORY, playload: [{ id: 'ask', title: "问答" }, { id:'share', title: '分享' }, { id: 'job', title: '招聘' }, { id:'good', title: '精华' }] })
  }
}

