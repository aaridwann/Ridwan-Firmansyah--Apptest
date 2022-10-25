import { View, Text, Alert } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { doneFetching } from '../../Redux/slice'

export default function AlertComponent({dispatch, title, message, cancel, ok }) {
    // const dispatch = useDispatch
    return (
        Alert.alert(title, message, [
            {
                text: "Ok",
                onPress: () => dispatch(doneFetching()),
                style: "ok",
            },
        ],
            // {
            //     cancelable: true,
            //     onDismiss: () =>
            //         Alert.alert(
            //             "This alert was dismissed by tapping outside of the alert dialog."
            //         ),
            // }
        )
    )
}