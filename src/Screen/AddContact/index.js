import { View, Text, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import TopBarComponent from '../../Components/TopBar/TopBar'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../../Utils/Constant/Color'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useDispatch } from 'react-redux'




export default function AddContactScreen() {
    const [data, setData] = useState({ img: '', firstName: '', lastName: '', age: null })
    const dispatch = useDispatch()


    function changeHandler(key, data) {
        setData(prev => ({ ...prev, [key]: data }))
    }

    async function pickImage() {
        var options = {
            mediaType: 'photo',
            saveToPhotos: true,
        };
        const result = await launchImageLibrary(options);
        return setData(prev => ({ ...prev, img: result.assets[0].uri }));
    }

    async function submit() {
    }


    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Image style={{ position: 'absolute', zIndex: -10, width: '100%', height: 1000 }} source={require('../../Assets/wave.png')} />
            <TopBarComponent title={'Add Contact'} style={{ marginTop: 10 }} rightIcon={'checkmark'} />

            <View style={{ width: 150, height: 150, alignItems: 'center', justifyContent: 'center', marginTop: 40, backgroundColor: 'white', borderRadius: 500, overflow: 'hidden' }}>
                {data.img ? <Image style={{ width: '100%', height: 1000 }} source={{ uri: data.img }} /> :
                    <Ionicons name={'person'} size={120} color={Colors.coklat} />}
            </View>

            <TouchableOpacity onPress={pickImage}>
                <Text style={{ fontSize: 20, marginTop: 10, color: 'white', fontWeight: '500' }}>Add Photo</Text>
            </TouchableOpacity>


            {/* Form */}
            <View style={{ width: '100%', paddingHorizontal: 20, marginTop: 20, }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'white', fontWeight: '500', fontSize: 18, marginRight: 10 }}>First name</Text>
                    <TextInput onChangeText={(data) => changeHandler('firstName', data)} textAlign='center' placeholderTextColor={'white'} style={{ width: '70%', borderBottomWidth: 1, color: 'white', borderBottomColor: 'white' }} placeholder='Firstname' />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'white', fontWeight: '500', fontSize: 18, marginRight: 10 }}>Last name</Text>
                    <TextInput onChangeText={(data) => changeHandler('lastName', data)} textAlign='center' placeholderTextColor={'white'} style={{ width: '70%', borderBottomWidth: 1, color: 'white', borderBottomColor: 'white' }} placeholder='Lastname' />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'white', fontWeight: '500', fontSize: 18, marginRight: 10 }}>Age</Text>
                    <TextInput onChangeText={(data) => changeHandler('age', data)} keyboardType='numeric' textAlign='center' placeholderTextColor={'white'} style={{ color: 'white', width: '70%', borderBottomWidth: 1, borderBottomColor: 'white' }} placeholder='Age' />
                </View>
            </View>

        </View>
    )

}