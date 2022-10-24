import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Constant/Color'
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

function FavoriteComponent({ style, favoriteData=FakeData }) {
    return (
        <View style={{ ...style, paddingBottom: 10, width: '100%', borderBottomWidth: 0.6, borderBottomColor: Colors.coklat, paddingHorizontal: 10 }}>
            <Text style={{ fontSize: 18 }}>Favorite Contact</Text>

            <FlatList
                horizontal
                style={{ width: '100%' }}
                contentContainerStyle={{ marginTop: 15, alignItems: 'center', }}
                data={favoriteData}
                scrollEnabled
                renderItem={({ item }) => <ItemsContact photo={item.photo} name={item.firstName} />}
                keyExtractor={({ id }, i) => i}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

function ItemsContact({ name, photo }) {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
            <View style={{ width: 50, height: 50, marginHorizontal: 15, borderRadius: 50, overflow: 'hidden' }}>
                <Image style={{ width: '100%', height: 50 }} source={{ uri: photo }} />
            </View>

            <Text style={{ fontWeight: '500', fontSize: 15, marginTop: 10 }}>{name}</Text>
        </View>
    )
}

export default React.memo(FavoriteComponent)