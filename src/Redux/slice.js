import { createSlice } from '@reduxjs/toolkit'

const initData = {
    loading: true,
    data: [],
    favorite: [],
    error: false,
    message: ''
}

export const contactSlice = createSlice({
    name: 'contact',
    initialState: initData,
    reducers: {
        startFethcing: (state) => {
            // error = false
            // message = ''
            // loading = true
            return ({ ...state, error: false, message: '', loading: true })
        },
        doneFetching: (state) => {
            return ({ ...state, error: false, message: '', loading: false })
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
            return ({ ...state, loading: false, error: true, message: payload })
        }
    }
})



export const { getData, addContact, deleteContact, editContact, addFavorite, errorFetching, startFethcing, doneFetching } = contactSlice.actions
export default contactSlice.reducer