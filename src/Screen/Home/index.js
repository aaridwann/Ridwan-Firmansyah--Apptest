import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native'
import Colors from '../../Utils/Constant/Color'
import TopBarComponent from '../../Components/TopBar/TopBar';
import { useRoute } from '@react-navigation/native';
import SearchInputComponent from '../../Components/InputComponent/InputComponent'
import FavoriteComponent from '../../Components/FavoriteComponent/FavoriteComponent';

export default function HomeScreen() {
    const route = useRoute()
    const { contact } = useSelector((state) => state)
    const navigate = useNavigation()
    console.log(route);
    return (
        <View style={{ flex: 1, width: '100%', alignItems: 'center' }}>
            <View style={{ backgroundColor: Colors.coklat, position: 'absolute', width: '100%', height: 100 }} />
            {/* Top Bar Component */}
            <TopBarComponent title={route.name} style={{ marginTop: 5 }} />

            {/* Search Component */}
            <SearchInputComponent input={(data) => console.log(data)} style={{ marginTop: 35 }} />

            {/* Favorite Contact Component */}
            <FavoriteComponent style={{ marginTop: 20 }} />

            <TouchableOpacity onPress={() => navigate.navigate('Details', { name: 'ridwan', age: 26 })}>
                <Text>Press</Text>
            </TouchableOpacity>
        </View>
    )
}