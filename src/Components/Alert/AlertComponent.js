import { Alert } from 'react-native'
import React from 'react'
import { doneFetching } from '../../Redux/slice'

export default React.memo(function AlertComponent({ dispatch, title, message, cancel, ok }) {
    return (
        Alert.alert(title, message, [
            {
                text: "Ok",
                onPress: () => dispatch(doneFetching()),
                style: "ok",
            },
        ],

        )
    )
}
)