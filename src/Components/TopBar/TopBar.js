import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation, useRoute } from '@react-navigation/native'


function TopBarComponent({ style, title, rightIcon = 'person-add', rightIconMethod }) {
    const navigate = useNavigation()
    const { name } = useRoute()

    return (
        <View style={{ ...style, width: '100%', paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <TouchableOpacity disabled={name == 'Contact' ? true : false} style={{ opacity: name == 'Contact' ? 0 : 1 }} onPress={() => navigate.goBack()}>
                <Ionicons name={title === 'Home' ? 'notifications' : 'chevron-back'} size={25} color={'white'} />
            </TouchableOpacity>

            {title && <Text style={{ color: 'white', fontSize: 25, fontWeight: '500' }}>{title}</Text>}
            <TouchableOpacity onPress={rightIconMethod} >
                <Ionicons name={rightIcon} size={25} color={'white'} />
            </TouchableOpacity>
        </View>
    )
}

export default React.memo(TopBarComponent)