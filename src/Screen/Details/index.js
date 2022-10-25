import { Alert, Text } from 'react-native'
import React, { Suspense, useCallback, useEffect, useReducer } from 'react'
import { useRoute } from '@react-navigation/native'
const AddContactScreen = React.lazy(() => import('../AddContact'))
import { useDispatch, useSelector } from 'react-redux';
import { doneFetching, errorFetching, startFethcing } from '../../Redux/slice';
import EditContact from '../../Utils/CustomHooks/EditContact';
import GetContactDetail from '../../Utils/CustomHooks/GetContactDetails';

const fkDate = [
    { id: 1, name: 'ridwan' },
    { id: 2, name: 'anggi' },
    { id: 3, name: 'duri' },
]

export default function DetailsScreen() {
    const dispatch = useDispatch()
    const [state, dispatchDetails] = useReducer(reducer, stateDetails)
    const { id, firstName, lastName, age } = useRoute().params.item
    const { error, message } = useSelector(state => state.contact)

    const editable = useCallback(() => {
        dispatchDetails({ type: 'ENABLE_EDIT' })
    }, [])

    const submit = useCallback(async (data) => {
        if (JSON.stringify(data) == JSON.stringify(state.dataDetails)) return alert('you haven`t changed anything')
        const Req = await EditContact(data, dispatch)
        if (Req) {
            editable()
            alert('Success Edit Contact')
        }
    }, [])

    useEffect(() => {
        GetContactDetail(id, dispatch, dispatchDetails)
    }, [id])


    // console.log('error nihh -=>', error);
    return (
        <Suspense fallback={<Text>Loading...</Text>}>
            {/* {error && Alert.alert('error',message)} */}
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