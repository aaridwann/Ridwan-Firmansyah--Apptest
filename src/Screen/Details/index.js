import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

export default function DetailsScreen() {
    const route = useRoute()
    const { params } = route
    return (
        <View>
            <Text>DetailsScreen</Text>
        </View>
    )
}