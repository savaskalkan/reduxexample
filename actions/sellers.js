import { ADD_SELLER,DELETE_SELLER } from "./types";

export const addSeller = user => ({
    type: ADD_SELLER,
    payload: user
})

export const deleteSeller = index => ({
    type: DELETE_SELLER,
    payload: index
})