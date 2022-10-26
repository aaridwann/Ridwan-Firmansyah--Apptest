import { createSlice } from '@reduxjs/toolkit'

const initData = {
    loading: true,
    data: [],
    favorite: [],
    filter: false,
    error: false,
    message: ''
}

export const contactSlice = createSlice({
    name: 'contact',
    initialState: initData,
    reducers: {
        startFethcing: (state) => {
            return ({ ...state, error: false, message: '', loading: true })
        },
        doneFetching: (state) => {
            return ({ ...state, error: false, message: '', loading: false })
        },
        filterData: (state, { payload }) => {
            const filter = state.data.filter((data) => data.firstName.toLowerCase().includes(payload))
            return ({ ...state, filter: filter })
        },
        addContact: (state, { payload }) => {
            return ({ ...state, data: payload, loading: false })
        },
        deleteContact: (state, payload) => {
            return ({ ...state, loading: false })
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



export const { filterData, addContact, deleteContact, addFavorite, errorFetching, startFethcing, doneFetching } = contactSlice.actions
export default contactSlice.reducer