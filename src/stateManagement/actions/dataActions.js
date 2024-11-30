import {DataGetAll,DataAdd,DataRemove,DataEdit} from './actionTypes'

export const getAll = () => ({
    type:DataGetAll
})

export const add = item => ({
    type:DataAdd,
    payload:item
})

export const remove = (id) => ({
    type:DataRemove,
    payload:id
})

export const edit = item => ({
    type:DataEdit,
    payload:item
})