import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../../Utils/Constant/Color'


function FavoriteComponent({ style, favoriteData }) {
    console.log(favoriteData);
    return (
        <View style={{ ...style, paddingBottom: 10, width: '100%', borderBottomWidth: 0.4, borderBottomColor: Colors.coklat, paddingHorizontal: 10 }}>
            <Text style={{ fontSize: 18, color: Colors.coklat }}>Favorite Contact</Text>

            {favoriteData.length == 0 ?
                <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20, marginHorizontal: 'auto', alignSelf: 'center', padding: 4, alignItems: 'center', justifyContent: 'center', }}>
                    <Text style={{ marginHorizontal: 10, color: Colors.coklat }}>Add Favorite Contact</Text>
                    <Ionicons name="add-circle" color={'gray'} size={30} />
                </TouchableOpacity>
                :
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
            }

        </View>
    )
}

function ItemsContact({ name, photo }) {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
            <View style={{ width: 60, borderWidth:2, borderColor:Colors.coklat, height: 60, marginHorizontal: 15, borderRadius: 50, overflow: 'hidden' }}>
                <Image style={{ width: '100%', height: '100%' }} source={{ uri: photo }} />
            </View>
            <Text style={{ fontWeight: '500', fontSize: 15, color:Colors.coklat, marginTop: 10 }}>{name}</Text>
        </View>
    )
}

export default React.memo(FavoriteComponent)