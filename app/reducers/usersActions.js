'use strict'
import axios from 'axios'

export const USER = {
  GOT_ALL: 'GOT_ALL',
  GOT_ONE: 'GOT_ONE',
  CREATED: 'CREATED',
  EDITED: 'EDITED',
  DELETED: 'DELETED',
}

export const gotAllUsers = allUsers => ({
  type: USER.GOT_ALL,
  allUsers,
})
export const gotOneUser = user => ({
  type: USER.GOT_ONE,
  user,
})
export const createdUser = user => ({
  type: USER.CREATED,
  user,
})
export const editedUser = user => ({
  type: USER.EDITED,
  user,
})
export const deletedUser = userId => ({
  type: USER.DELETED,
  userId,
})

export const getAllUsers = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/users')
    dispatch(gotAllUsers(data))
  } catch (error) {
    console.error(error)
  }
}

export const getOneUser = userId => async dispatch => {
  try {
    const { data } = await axios.get(`/api/users/${userId}`)
    dispatch(gotOneUser(data))
  } catch (error) {
    console.error(error)
  }
}

export const createUser = user => async dispatch => {
  try {
    const { data } = await axios.post('/api/users/', user)
    dispatch(createdUser(data))
    return data
  } catch (error) {
    console.error(error)
  }
}

export const editUser = user => async dispatch => {
  try {
    const { data } = await axios.put(`/api/users/${user.id}`, user)
    dispatch(editedUser(data))
    return data
  } catch (error) {
    console.error(error)
  }
}

export const deleteUser = userId => async dispatch => {
  try {
    const { data } = await axios.delete(`/api/users/${userId}`)
    dispatch(deletedUser(data))
    return data
  } catch (error) {
    console.error(error)
  }
}
