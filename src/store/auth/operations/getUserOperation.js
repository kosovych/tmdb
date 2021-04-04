import { createLogic } from 'redux-logic'
import { get } from 'lodash'

import { ACCOUNT } from 'Constants'
import { GET_USER } from '../types'
import { storeUser } from '../actions'

export const getUserOperation = createLogic({
  type: GET_USER,
  latest: true,
  async process({ action, axios }, dispatch, done) {
    const { sessionId } = action
    const response = await axios.get(ACCOUNT, { params: { session_id: sessionId } })
    const {
      id, name, avatar, username
    } = response.data
    const avatarUrl = get(avatar, ['tmdb', 'avatar_path'])
    dispatch(storeUser({
      userId: id, displayName: name, username, avatarUrl
    }))
    localStorage.setItem('userId', id)
    done()
  }
})
