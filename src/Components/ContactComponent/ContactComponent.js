import { View, Text, Image, TouchableOpacity, FlatList, Animated, Alert } from 'react-native'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../../Utils/Constant/Color'
import { useSelector, useDispatch } from 'react-redux'
import * as Animatable from 'react-native-animatable';
import { addFavorite } from '../../Redux/slice'
import { useNavigation } from '@react-navigation/native'
import DeleteContact from '../../Utils/CustomHooks/DeleteContact'
import Spinner from 'react-native-loading-spinner-overlay'


function ContactComponent({ style }) {
    const { data, filter, loading } = useSelector(state => state.contact)
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
                    if (await DeleteContact(dispatch, contact.id)) Alert.alert('Success', 'Success Delete')
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

    const dataContact = useMemo(() => data, [data])

    return (
        <View style={{ ...style, width: '100%', flex: 1, alignItems: 'center' }}>
            {loading &&
                <Spinner
                    visible={loading}
                    textContent={'Loading...'}
                    textStyle={{ color: '#FFF' }}
                />
            }
            <Image
                style={{ width: '100%', height: 700, position: 'absolute', zIndex: 0, opacity: 0.8 }}
                source={require('../../Assets/peak.png')}
            />


            <Text style={{ fontSize: 18, alignSelf: 'flex-start', marginBottom: 10, paddingHorizontal: 10, color: Colors.coklat, marginTop: 15 }}>All Contact</Text>
            {filter.length < 1 && <Text style={{ color: 'gray', marginTop: 25, fontSize: 16, paddingVertical: 40 }}> Contact not found </Text>}

            <FlatList
                style={{ flex: 1, width: '100%' }}
                contentContainerStyle={{ width: '100%', padding: 15 }}
                data={filter ? filter : dataContact}
                keyExtractor={({ id }) => id}
                showsVerticalScrollIndicator={false}
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
            />

        </View>
    )
}

export default React.memo(ContactComponent)

const ItemsContact = React.memo(
    function ItemsContact({ id, firstName, lastName, photo, deleteContact, updateContact, favoriteContact, goDetails }) {
        let { favorite } = useSelector(state => state.contact)
        const [options, setOptions] = useState(false)
        favorite = favorite?.map((x) => x.id)

        function closeOptions(e) {
            setOptions(prev => prev = false)
        }
        const configAnimation = {
            animImg: {
                from: {
                    left: options ? 0 : 180,
                },
                to: {
                    left: options ? 180 : 0,
                },
            },
            animOptions: {
                from: {
                    opacity: !options ? 0 : 1,
                    transform: [{ translateX: options ? -300 : 10 }]
                },
                to: {
                    transform: [{ translateX: !options ? -300 : 10 }],
                    opacity: !options ? 0 : 1
                },
            }
        }

        useEffect(() => {
            const close = setTimeout(() => {
                if (options) setOptions(prev => prev = false)
            }, 3500)

            return () => clearTimeout(close)
        }, [options])

        return (
            <View onStartShouldSetResponder={closeOptions}
                style={{
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 10,
                    },
                    shadowOpacity: 0.3,
                    shadowRadius: 20,
                    elevation: 8,
                    borderRadius: 20, overflow: 'hidden', marginVertical: 4, paddingHorizontal: 15, width: '100%', height: 85, backgroundColor: 'rgba(255, 255, 255, 0.90)', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
                }}>

                {/* === Img === */}
                <Animatable.View duration={200} easing='ease-in-out' animation={configAnimation.animImg} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={goDetails}>
                        <View style={{ borderWidth: 2, borderColor: Colors.coklat, overflow: 'hidden', height: 60, width: 60, marginHorizontal: 10, backgroundColor: 'white', borderRadius: 50 }}>
                            <Image style={{ width: '100%', height: '100%' }} source={{ uri: photo || 'https://i.pinimg.com/564x/46/53/63/465363f6c1b791bfbf19ab85914aac92.jpg' }} />
                        </View>
                    </TouchableOpacity>

                    <View>
                        <Text style={{ fontSize: 17, fontWeight: '400', color: 'gray' }}>{firstName.charAt(0).toUpperCase() + firstName.slice(1)}</Text>
                        <Text style={{ fontSize: 10, color: 'gray' }}>{lastName.charAt(0).toUpperCase() + lastName.slice(1)}</Text>
                    </View>
                </Animatable.View>


                {/* === Options === */}
                <Animatable.View duration={250} animation={configAnimation.animOptions} style={{ flexDirection: 'row', position: 'absolute', alignItems: 'center' }}>
                    <TouchableOpacity onPress={deleteContact} style={{ marginHorizontal: 4, alignItems: 'center', justifyContent: 'center', width: 45, height: 45, borderRadius: 50, backgroundColor: Colors.red }}>
                        <Ionicons name={'trash'} size={25} color={'white'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={goDetails} style={{ marginHorizontal: 4, alignItems: 'center', justifyContent: 'center', width: 45, height: 45, borderRadius: 50, backgroundColor: Colors.yellow }}>
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
)