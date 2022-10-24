import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

export default function TopBarComponent({ style, title, rightIcon = 'person-add' }) {
    const navigate = useNavigation()

    return (
        <View style={{ ...style, width: '100%', paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <TouchableOpacity>
                <Ionicons name={title === 'Home' ? 'notifications' : 'chevron-back'} size={25} color={'white'} />
            </TouchableOpacity>

            {title && <Text style={{ color: 'white', fontSize: 25, fontWeight: '500' }}>{title}</Text>}
            <TouchableOpacity onPress={() => navigate.navigate('Add Contact')} >
                <Ionicons name={rightIcon} size={25} color={'white'} />
            </TouchableOpacity>
        </View>
    )
}