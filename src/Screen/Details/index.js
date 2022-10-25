import { Text } from 'react-native'
import React, { Suspense, useCallback, useEffect, useReducer } from 'react'
import { useRoute } from '@react-navigation/native'
const AddContactScreen = React.lazy(() => import('../AddContact'))
import { useDispatch } from 'react-redux';
import { doneFetching, errorFetching, startFethcing } from '../../Redux/slice';

const fkDate = [
    { id: 1, name: 'ridwan' },
    { id: 2, name: 'anggi' },
    { id: 3, name: 'duri' },
]

export default function DetailsScreen() {
    const dispatch = useDispatch()
    const [state, dispatchDetails] = useReducer(reducer, stateDetails)
    const { id, firstName, lastName, age } = useRoute().params.item

    const editable = useCallback(() => {
        dispatchDetails({ type: 'ENABLE_EDIT' })
    }, [])

    const submit = useCallback((data) => {
        if (JSON.stringify(data) == JSON.stringify(state.dataDetails)) return alert('you haven`t changed anything')
    }, [])

    useEffect(() => {
        async function fetchDetails(id) {
            dispatch(startFethcing())
            try {
                const res = await fetch(`https://simple-contact-crud.herokuapp.com/contact/${id}`, { method: 'GET' })
                const data = await res.json()
                // setDataDetails(data.data)
                dispatchDetails({ type: 'ADD_DATA_DETAILS', payload: data.data })
                dispatch(doneFetching())
            } catch (error) {
                console.log(error);
                dispatch(errorFetching())
            }
        }

        fetchDetails(id)
    }, [id])

    return (
        <Suspense fallback={<Text>Loading...</Text>}>
            <AddContactScreen submitEdit={(data) => submit(data)} editState={state.editable} editable={() => editable()} title={state.editable ? 'Edit Contact' : 'Details Contact'} dataDetails={state.dataDetails} />
        </Suspense>
    )
}

const stateDetails = {
    editable: false,
    dataDetails: null,
    newData: null
}

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_DATA_DETAILS':
            return ({ ...state, dataDetails: action.payload });
        case 'ENABLE_EDIT':
            return ({ ...state, editable: !state.editable });
        case 'NEW_DATA':
            return ({ ...state, newData: action.payload })
        default:
            return state
    }
}