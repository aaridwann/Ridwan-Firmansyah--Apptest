import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function ModalOptions() {
    return (
        <View style={{ borderRadius: 20, paddingHorizontal: 20, alignItems: 'center',  paddingVertical: 5, top: 30,  backgroundColor: 'white' }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name={'person-add'} size={25} color={'gray'} />
                <Text style={{ marginLeft: 10, fontWeight: '500' }}>Add Contact</Text>
            </TouchableOpacity>
        </View>
    )
}