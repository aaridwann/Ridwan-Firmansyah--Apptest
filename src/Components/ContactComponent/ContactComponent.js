import { View, Text, Image, TouchableOpacity, FlatList, Animated, Alert, Button } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../../Utils/Constant/Color'
import { useSelector, useDispatch } from 'react-redux'
import * as Animatable from 'react-native-animatable';
import { addFavorite } from '../../Redux/slice'
import { useNavigation } from '@react-navigation/native'
import DeleteContact from '../../Utils/CustomHooks/DeleteContact'
import AlertComponent from '../Alert/AlertComponent'


function ContactComponent({ style, dataContact }) {
    const { contact } = useSelector(state => state)
    const { data } = contact
    const dispatch = useDispatch()
    const navigation = useNavigation()
    

    const deleteContact = useCallback((contact) => {
        Alert.alert('Delete Contact', `Are you sure for delete ${contact.firstName + ' ' + contact.lastName} from your contact ?`, [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            {
                text: "OK", onPress: async () => {
                    if (await DeleteContact(dispatch, contact.id)) alert('Success Delete')
                }

            }
        ])
    }, [])

    const favoriteContact = useCallback((contact) => {
        Alert.alert('Add Favorite Contact', `Are you sure for add ${contact.firstName + ' ' + contact.lastName} to your favorite contact ?`, [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { text: "OK", onPress: () => dispatch(addFavorite(contact)) }
        ])

    }, [])

    const editContact = useCallback((contact) => {

    }, [])


    return (
        <View style={{ ...style, width: '100%', flex: 1, alignItems: 'center' }}>
           
            <Text style={{ fontSize: 18, alignSelf: 'flex-start', paddingHorizontal: 10, color: Colors.coklat, marginTop: 15 }}>All Contact</Text>
            <FlatList
                style={{ flex: 1, width: '100%' }}
                contentContainerStyle={{ width: '100%', paddingTop: 20, paddingHorizontal: 8, }}
                data={data}
                renderItem={({ item }) =>
                    <ItemsContact
                        deleteContact={() => deleteContact(item)}
                        favoriteContact={() => favoriteContact(item)}
                        photo={item.photo}
                        firstName={item.firstName}
                        lastName={item.lastName}
                        id={item.id}
                        goDetails={() => navigation.navigate('Contact Details', { item })}
                    />

                }
                keyExtractor={({ id }, i) => id}
            />


        </View>
    )
}

export default React.memo(ContactComponent)


function ItemsContact({ id, firstName, lastName, photo, deleteContact, updateContact, favoriteContact, goDetails }) {
    let { favorite } = useSelector(state => state.contact)
    const [options, setOptions] = useState(false)
    favorite = favorite?.map((x) => x.id)

    function closeOptions(e) {
        setOptions(prev => prev = false)
    }
    const anim = {
        from: {
            // opacity: !options ? 0 : 1,
            left: options ? 0 : 200,
            // transform: [{translateX: options ? 200 : 0 }]
        },
        to: {
            left: options ? 200 : 0,
        },
    };
    const animOptions = {
        from: {
            opacity: !options ? 1 : 0,
            transform: [{ translateX: options ? -300 : 10 }]
        },
        to: {
            transform: [{ translateX: !options ? -300 : 10 }],
            opacity: !options ? 0 : 1
        },
    };
    useEffect(() => {
        const close = setTimeout(() => {
            if (options) setOptions(prev => prev = false)
        }, 3500)

        return () => clearTimeout(close)
    }, [options])




    return (
        <View onStartShouldSetResponder={closeOptions}
            style={{ borderRadius: 20, overflow: 'hidden', marginVertical: 1, borderBottomColor: Colors.gray, borderBottomWidth: 0.5, paddingHorizontal: 15, width: '100%', height: 85, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

            {/* === Img === */}
            <Animatable.View duration={500} easing='ease-in-out' animation={anim} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={goDetails}>
                    <View style={{ overflow: 'hidden', height: 60, width: 60, marginHorizontal: 10, backgroundColor: 'white', borderRadius: 50, backgroundColor: 'red' }}>
                        <Image style={{ width: '100%', height: '100%' }} source={{ uri: photo || 'https://i.pinimg.com/564x/46/53/63/465363f6c1b791bfbf19ab85914aac92.jpg' }} />
                    </View>
                </TouchableOpacity>

                <View>
                    <Text style={{ fontSize: 17, color: 'gray' }}>{firstName}</Text>
                    <Text style={{ fontSize: 10, color: 'gray' }}>{lastName}</Text>
                </View>
            </Animatable.View>


            {/* === Options === */}
            <Animatable.View duration={500} animation={animOptions} style={{ flexDirection: 'row', position: 'absolute', alignItems: 'center' }}>
                <TouchableOpacity onPress={deleteContact} style={{ marginHorizontal: 4, alignItems: 'center', justifyContent: 'center', width: 45, height: 45, borderRadius: 50, backgroundColor: Colors.red }}>
                    <Ionicons name={'trash'} size={25} color={'white'} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginHorizontal: 4, alignItems: 'center', justifyContent: 'center', width: 45, height: 45, borderRadius: 50, backgroundColor: Colors.yellow }}>
                    <Ionicons name={'pencil'} size={25} color={'white'} />
                </TouchableOpacity>
                {!favorite?.includes(id) &&
                    <TouchableOpacity onPress={favoriteContact} style={{ marginHorizontal: 4, alignItems: 'center', justifyContent: 'center', width: 45, height: 45, borderRadius: 50, backgroundColor: Colors.green }}>
                        <Ionicons name={'bookmark'} size={25} color={'white'} />
                    </TouchableOpacity>
                }
            </Animatable.View>

            {/* === Button === */}
            <TouchableOpacity onPress={() => setOptions(prev => !prev)}>
                <Ionicons name={'ellipsis-horizontal'} size={25} color={'gray'} />
            </TouchableOpacity>
        </View >
    )
}
