import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function TopBarComponent({ style, title }) {
    return (
        <View style={{ ...style, width: '100%', paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <TouchableOpacity>
                <Ionicons name={title === 'Home' ? 'notifications' : 'chevron-back'} size={25} color={'white'} />
            </TouchableOpacity>

            <Text style={{ color: 'white', fontSize: 25, fontWeight: '500' }}>{title}</Text>

            <TouchableOpacity>
                <Ionicons name={'ellipsis-horizontal'} size={25} color={'white'} />
            </TouchableOpacity>
        </View>
    )
}