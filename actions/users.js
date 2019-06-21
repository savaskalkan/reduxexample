import { ADD_USER,DELETE_USER } from "./types";

export const addUser = user => ({
    type: ADD_USER,
    payload: user
})

export const deleteUser = index => ({
    type: DELETE_USER,
    payload: index
})