import { View, Text, Image, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import TopBarComponent from '../../Components/TopBar/TopBar'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../../Utils/Constant/Color'
import { launchImageLibrary } from 'react-native-image-picker';
import { useDispatch } from 'react-redux'
import { startFethcing } from '../../Redux/slice'
import { useNavigation, useRoute } from '@react-navigation/native'



export default function AddContactScreen({ editState, editable, title, dataDetails, submitEdit }) {
    const [data, setData] = useState({ photo: '', firstName: '', lastName: '', age: '' })
    const route = useRoute().name
    const details = 'Contact Details'
    const dispatch = useDispatch()
    const navigate = useNavigation()

    function changeHandler(key, data) {
        setData(prev => ({ ...prev, [key]: data }))
    }

    async function pickImage() {
        var options = {
            mediaType: 'photo',
            saveToPhotos: true,
            noData: true
        };
        const result = await launchImageLibrary(options);
        if (result.didCancel) return
        return setData(prev => ({ ...prev, photo: result.assets[0].uri }));
    }

    function submit() {
        if (!data.firstName || !data.lastName || !data.age) return alert('Input with right data')
        dispatch(startFethcing())

        fetch('https://simple-contact-crud.herokuapp.com/contact', { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } })
            .then(res => res.json())
            .then(data => {
                return navigate.navigate('Contact')
            })
            .catch((err) => {
                dispatch()
                console.log(err)
            })
    }

    function cancelEdit() {
        Alert.alert('Cancel Edit', `Are you sure for Cancel edit ?`, [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            {
                text: "OK", onPress: () => {
                    editable(),
                        setData(prev => prev = dataDetails)
                }
            }
        ])
    }

    useEffect(() => {
        dataDetails && setData(prev => dataDetails)
    }, [dataDetails])

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>

            {/* === Background === */}
            <Image style={{ position: 'absolute', zIndex: -10, width: '100%', height: 1000 }} source={require('../../Assets/wave.png')} />

            {/* === Topbar === */}
            <TopBarComponent title={title || 'Add Contact'} style={{ marginTop: 10 }} rightIcon={route == details && !editState ? false : 'checkmark'} rightIconMethod={route == details && editState? () => submitEdit(data) : submit} />

            {/* === Photo === */}
            <View style={{ borderWidth: editState ? 8 : 0, borderColor: 'white', width: 150, height: 150, alignItems: 'center', justifyContent: 'center', marginTop: 40, backgroundColor: 'white', borderRadius: 500, overflow: 'hidden' }}>
                {
                    data.photo ? <Image style={{ width: '100%', height: '100%' }} source={{ uri: data.photo }} /> :
                        <Ionicons name={'person'} size={120} color={Colors.coklat} />
                }
            </View>

            {/* === Button Change & Add Photo ===*/}
            {(route == details && editState) || route !== details ?
                <TouchableOpacity onPress={pickImage}>
                    <Text style={{ fontSize: 20, marginTop: 10, color: 'white', fontWeight: '500' }}>{editState ? 'Change Photo' : 'Add Photo'}</Text>
                </TouchableOpacity>
                :
                ''
            }


            {/* === Form Input ===*/}
            <View style={{ width: '100%', paddingHorizontal: 20, marginTop: 20, }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'white', fontWeight: '500', fontSize: 18, marginRight: 10 }}>First name</Text>
                    <TextInput editable={route == details ? editState : true} value={data?.firstName} onChangeText={(data) => changeHandler('firstName', data)} textAlign='center' placeholderTextColor={'white'} style={{ width: '70%', borderBottomWidth: 1, color: 'white', borderBottomColor: 'white' }} placeholder='Firstname' />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'white', fontWeight: '500', fontSize: 18, marginRight: 10 }}>Last name</Text>
                    <TextInput editable={route == details ? editState : true} value={data?.lastName} onChangeText={(data) => changeHandler('lastName', data)} textAlign='center' placeholderTextColor={'white'} style={{ width: '70%', borderBottomWidth: 1, color: 'white', borderBottomColor: 'white' }} placeholder='Lastname' />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'white', fontWeight: '500', fontSize: 18, marginRight: 10 }}>Age</Text>
                    <TextInput editable={route == details ? editState : true} value={data?.age} onChangeText={(data) => changeHandler('age', data)} keyboardType='numeric' textAlign='center' placeholderTextColor={'white'} style={{ color: 'white', width: '70%', borderBottomWidth: 1, borderBottomColor: 'white' }} placeholder='Age' />
                </View>

                {/* === Button Edit === */}
                {route == details &&
                    <TouchableOpacity onPress={editState ? cancelEdit : editable} style={{ borderRadius: 20, alignSelf: 'center', marginTop: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', width: 100, paddingVertical: 5 }}>
                        <Text style={{ fontSize: 15, fontWeight: '500', }}>{editState ? 'Cancel' : 'Edit'}</Text>
                    </TouchableOpacity>
                }

            </View>

        </View>
    )

}