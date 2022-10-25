import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const axios = require('axios').default;

const initData = {
    loading: true,
    data: [
        {
            "id": "93ad6070-c92b-11e8-b02f-cbfa15db428b",
            "firstName": "Bilbo",
            "lastName": "Baggins",
            "age": 111,
            "photo": "https://i.pinimg.com/564x/59/14/df/5914dfdd849b77354e1958e75243855e.jpg"
        },
        {
            "id": "b3abd640-c92b-11e8-b02f-cbfa15db428b",
            "firstName": "Luke",
            "lastName": "Skywalker",
            "age": 20,
            "photo": "https://i.pinimg.com/564x/00/c6/af/00c6afef099ca4cf4e2f9c2cac33b04f.jpg"
        },

    ],
    favorite: [],
    error: false,
    message: ''
}

export const contactSlice = createSlice({
    name: 'contact',
    initialState: initData,
    reducers: {
        startFethcing: (state) => {
            state.loading = true
        },
        doneFetching: (state) => {
            state.loading = false
        },
        getData: async (state) => {

        },
        addContact: (state, { payload }) => {
            return ({ ...state, data: payload, loading: false })
        },
        deleteContact: (state, payload) => {
            return ({ ...state, loading: false })
        },
        editContact: async (state, payload) => {

        },
        addFavorite: (state, { payload }) => {
            const check = state?.favorite?.map((x) => x.id)
            const test = check?.includes(payload.id)
            return test ? state : ({ ...state, favorite: [...state.favorite, { ...payload }] })
        },
        errorFetching: (state, { payload }) => {
            console.log('payload message', payload);
            return ({ ...state, loading: false, error: true, message: payload })
        }
    }
})



export const { getData, addContact, deleteContact, editContact, addFavorite, errorFetching, startFethcing, doneFetching } = contactSlice.actions
export default contactSlice.reducer