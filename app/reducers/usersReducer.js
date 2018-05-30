'use strict'
import { USER } from './usersActions'

const initialState = {
  allUsers: [],
  usersLoading: true,
  selectedUser: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USER.GOT_ALL: {
      return {
        allUsers: [action.users],
        usersLoading: false,
      }
    }
    case USER.GOT_ONE: {
      return {
        ...state,
        selectedUser: action.user,
      }
    }
    case USER.CREATED: {
      return {
        ...state,
        allUsers: [...state.allUsers, action.user],
      }
    }
    case USER.EDITED: {
      return {
        ...state,
        allUsers: [
          ...state.allUsers.map(
            user => (user.id !== action.user.id ? action.user : user)
          ),
        ],
      }
    }
    case USER.DELETED: {
      return {
        ...state,
        allUsers: [...state.allUsers.filter(user => user.id !== action.userId)],
      }
    }
    default: {
      return state
    }
  }
}
