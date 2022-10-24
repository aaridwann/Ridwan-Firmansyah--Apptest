import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native'
import Colors from '../../Utils/Constant/Color'
import TopBarComponent from '../../Components/TopBar/TopBar';
import { useRoute } from '@react-navigation/native';
import SearchInputComponent from '../../Components/InputComponent/InputComponent'
import FavoriteComponent from '../../Components/FavoriteComponent/FavoriteComponent';
import ContactComponent from '../../Components/ContactComponent/ContactComponent';

const FakeData = [
    {
        "id": "93ad6070-c92b-11e8-b02f-cbfa15db428b",
        "firstName": "Bilbo",
        "lastName": "Baggins",
        "age": 111,
        "photo": "https://i.pinimg.com/564x/4e/85/6f/4e856fc6f87961231bd640d12696b702.jpg"
    },
    {
        "id": "b3abd640-c92b-11e8-b02f-cbfa15db428b",
        "firstName": "Luke",
        "lastName": "Skywalker",
        "age": 20,
        "photo": "https://i.pinimg.com/564x/de/20/32/de203280d471111df966b91b4d342878.jpg"
    },
    {
        "id": "93ad6070-c92b-11e8-b02f-cbfa15db428b",
        "firstName": "Bilbo",
        "lastName": "Baggins",
        "age": 111,
        "photo": "https://i.pinimg.com/564x/4e/85/6f/4e856fc6f87961231bd640d12696b702.jpg"
    },
    {
        "id": "b3abd640-c92b-11e8-b02f-cbfa15db428b",
        "firstName": "Luke",
        "lastName": "Skywalker",
        "age": 20,
        "photo": "https://i.pinimg.com/564x/de/20/32/de203280d471111df966b91b4d342878.jpg"
    },
    {
        "id": "93ad6070-c92b-11e8-b02f-cbfa15db428b",
        "firstName": "Bilbo",
        "lastName": "Baggins",
        "age": 111,
        "photo": "https://i.pinimg.com/564x/4e/85/6f/4e856fc6f87961231bd640d12696b702.jpg"
    },
    {
        "id": "b3abd640-c92b-11e8-b02f-cbfa15db428b",
        "firstName": "Luke",
        "lastName": "Skywalker",
        "age": 20,
        "photo": "https://i.pinimg.com/564x/de/20/32/de203280d471111df966b91b4d342878.jpg"
    },
    {
        "id": "93ad6070-c92b-11e8-b02f-cbfa15db428b",
        "firstName": "Bilbo",
        "lastName": "Baggins",
        "age": 111,
        "photo": "https://i.pinimg.com/564x/4e/85/6f/4e856fc6f87961231bd640d12696b702.jpg"
    },
    {
        "id": "b3abd640-c92b-11e8-b02f-cbfa15db428b",
        "firstName": "Luke",
        "lastName": "Skywalker",
        "age": 20,
        "photo": "https://i.pinimg.com/564x/de/20/32/de203280d471111df966b91b4d342878.jpg"
    },
    {
        "id": "93ad6070-c92b-11e8-b02f-cbfa15db428b",
        "firstName": "Bilbo",
        "lastName": "Baggins",
        "age": 111,
        "photo": "https://i.pinimg.com/564x/4e/85/6f/4e856fc6f87961231bd640d12696b702.jpg"
    },
    {
        "id": "b3abd640-c92b-11e8-b02f-cbfa15db428b",
        "firstName": "Luke",
        "lastName": "Skywalker",
        "age": 20,
        "photo": "https://i.pinimg.com/564x/de/20/32/de203280d471111df966b91b4d342878.jpg"
    },
    {
        "id": "93ad6070-c92b-11e8-b02f-cbfa15db428b",
        "firstName": "Bilbo",
        "lastName": "Baggins",
        "age": 111,
        "photo": "https://i.pinimg.com/564x/4e/85/6f/4e856fc6f87961231bd640d12696b702.jpg"
    },
    {
        "id": "b3abd640-c92b-11e8-b02f-cbfa15db428b",
        "firstName": "Luke",
        "lastName": "Skywalker",
        "age": 20,
        "photo": "https://i.pinimg.com/564x/de/20/32/de203280d471111df966b91b4d342878.jpg"
    },
    {
        "id": "93ad6070-c92b-11e8-b02f-cbfa15db428b",
        "firstName": "Bilbo",
        "lastName": "Baggins",
        "age": 111,
        "photo": "https://i.pinimg.com/564x/4e/85/6f/4e856fc6f87961231bd640d12696b702.jpg"
    },
    {
        "id": "b3abd640-c92b-11e8-b02f-cbfa15db428b",
        "firstName": "Luke",
        "lastName": "Skywalker",
        "age": 20,
        "photo": "https://i.pinimg.com/564x/de/20/32/de203280d471111df966b91b4d342878.jpg"
    },
    {
        "id": "93ad6070-c92b-11e8-b02f-cbfa15db428b",
        "firstName": "Bilbo",
        "lastName": "Baggins",
        "age": 111,
        "photo": "https://i.pinimg.com/564x/4e/85/6f/4e856fc6f87961231bd640d12696b702.jpg"
    },
    {
        "id": "b3abd640-c92b-11e8-b02f-cbfa15db428b",
        "firstName": "Luke",
        "lastName": "Skywalker",
        "age": 20,
        "photo": "https://i.pinimg.com/564x/de/20/32/de203280d471111df966b91b4d342878.jpg"
    },
    {
        "id": "93ad6070-c92b-11e8-b02f-cbfa15db428b",
        "firstName": "Bilbo",
        "lastName": "Baggins",
        "age": 111,
        "photo": "https://i.pinimg.com/564x/4e/85/6f/4e856fc6f87961231bd640d12696b702.jpg"
    },
    {
        "id": "b3abd640-c92b-11e8-b02f-cbfa15db428b",
        "firstName": "Luke",
        "lastName": "Skywalker",
        "age": 20,
        "photo": "https://i.pinimg.com/564x/de/20/32/de203280d471111df966b91b4d342878.jpg"
    },
    {
        "id": "93ad6070-c92b-11e8-b02f-cbfa15db428b",
        "firstName": "Bilbo",
        "lastName": "Baggins",
        "age": 111,
        "photo": "https://i.pinimg.com/564x/4e/85/6f/4e856fc6f87961231bd640d12696b702.jpg"
    },
    {
        "id": "b3abd640-c92b-11e8-b02f-cbfa15db428b",
        "firstName": "Luke",
        "lastName": "Skywalker",
        "age": 20,
        "photo": "https://i.pinimg.com/564x/de/20/32/de203280d471111df966b91b4d342878.jpg"
    },
    {
        "id": "93ad6070-c92b-11e8-b02f-cbfa15db428b",
        "firstName": "Bilbo",
        "lastName": "Baggins",
        "age": 111,
        "photo": "https://i.pinimg.com/564x/4e/85/6f/4e856fc6f87961231bd640d12696b702.jpg"
    },
    {
        "id": "b3abd640-c92b-11e8-b02f-cbfa15db428b",
        "firstName": "Luke",
        "lastName": "Skywalker",
        "age": 20,
        "photo": "https://i.pinimg.com/564x/de/20/32/de203280d471111df966b91b4d342878.jpg"
    },
]

export default function HomeScreen() {
    const route = useRoute()
    const { contact } = useSelector((state) => state)
    const navigate = useNavigation()

    return (
        <View style={{ flex: 1, width: '100%', alignItems: 'center', backgroundColor: Colors.white }}>
            <View style={{ backgroundColor: Colors.coklat, position: 'absolute', width: '100%', height: 100 }} />

            {/* Top Bar Component */}
            <TopBarComponent title={route.name} style={{ marginTop: 5 }} />

            {/* Search Component */}
            <SearchInputComponent input={(data) => console.log(data)} style={{ marginTop: 35 }} />

            {/* Favorite Contact Component */}
            <FavoriteComponent favoriteData={FakeData} style={{ marginTop: 20 }} />

            {/* Contact Content */}
            <ContactComponent />


            {/* <TouchableOpacity onPress={() => navigate.navigate('Details', { name: 'ridwan', age: 26 })}>
                <Text>Press</Text>
            </TouchableOpacity> */}
        </View>
    )
}