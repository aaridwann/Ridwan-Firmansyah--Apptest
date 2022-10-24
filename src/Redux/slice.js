import { createSlice } from '@reduxjs/toolkit'

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
        getData: async (state) => {

        },
        addContact: async (state, payload) => {

        },
        deleteContact: async (state, payload) => {

        },
        editContact: async (state, payload) => {

        },
        addFavorite: (state, { payload }) => {
            return { ...state, favorite: [...state.favorite, { ...payload }] }
            console.log(state.favorite);
        }
    }
})

export const { getData, addContact, deleteContact, editContact, addFavorite } = contactSlice.actions
export default contactSlice.reducer