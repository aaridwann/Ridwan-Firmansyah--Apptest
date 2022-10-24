import { createSlice } from '@reduxjs/toolkit'

const initData = {
    loading: true,
    data: [{
        "id": "93ad6070-c92b-11e8-b02f-cbfa15db428b",
        "firstName": "Bilbo",
        "lastName": "Baggins",
        "age": 111,
        "photo": "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550"
    },
    {
        "id": "b3abd640-c92b-11e8-b02f-cbfa15db428b",
        "firstName": "Luke",
        "lastName": "Skywalker",
        "age": 20,
        "photo": "N/A"
    }],
    error: false,
    message: ''
}

export const contactSlice = createSlice({
    name: 'contact',
    initialState: initData,
    reducers: {
        getData: async (state) => {

        },
        addContact: async (state, payload) => {

        },
        deleteContact: async (state, payload) => {

        },
        editContact: async (state, payload) => {

        }
    }
})

export const { getData, addContact, deleteContact, editContact } = contactSlice.actions
export default contactSlice.reducer