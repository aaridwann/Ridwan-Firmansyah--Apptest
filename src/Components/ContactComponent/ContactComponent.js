import { View, Text, Image, TouchableOpacity, FlatList, Animated } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../../Utils/Constant/Color'
import { useSelector, useDispatch } from 'react-redux'
import * as Animatable from 'react-native-animatable';

function ContactComponent({ style, dataContact }) {
    const { contact } = useSelector(state => state)
    const { data, loading } = contact
    return (
        <View style={{ ...style, width: '100%', flex: 1, alignItems: 'center' }}>
            {/* <Text style={{ fontSize: 28, marginTop: 15, fontWeight: '500' }}>All Contacts</Text> */}
            <FlatList
                style={{ flex: 1, width: '100%' }}
                contentContainerStyle={{ width: '100%' }}
                data={data}
                renderItem={({ item }) => {
                    return (
                        <ItemsContact photo={item.photo} firstName={item.firstName} lastName={item.lastName} />
                    )
                }}
                keyExtractor={({ id }, i) => i}
            />


        </View>
    )
}

export default React.memo(ContactComponent)






function ItemsContact({ firstName, lastName, photo }) {
    const [options, setOptions] = useState(false)
    const itemRef = useRef()

    function closeOptions(e) {
        if (itemRef.current) {
            setOptions(prev => prev = false)
        }
    }
    useEffect(() => {
        const close = setTimeout(() => {
            if (options) setOptions(prev => prev = false)
        }, 3500)

        return () => clearTimeout(close)
    }, [options])

    const anim = {
        from: {
            // opacity: !options ? 0 : 1,
            left: options ? 0 : 200,
            // transform: [{ translateX: options ? 200 : 0 }]
        },
        to: {
            // transform: [{ translateX: !options ? 0 : 200 }],
            left: options ? 200 : 0,
            // opacity: !options ? 1 : 0,
        },
    };
    const animOptions = {
        from: {
            opacity: !options ? 1 : 0,
            // left: !options && -200,
            // transform: [{ translateX: !options ? -300 : 10 }]
            transform: [{ translateX: options ? -300 : 10 }]
        },
        to: {
            transform: [{ translateX: !options ? -300 : 10 }],
            // transform: [{ translateX: options ? 10 : -300 }],
            // left: options && 0,
            opacity: !options ? 0 : 1
        },
    };


    return (

        <View ref={itemRef} onStartShouldSetResponder={closeOptions} style={{ marginVertical: 2, borderBottomColor: Colors.gray, borderBottomWidth: 0.5, paddingHorizontal: 15, width: '100%', height: 85, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

            {/* === Img === */}
            <Animatable.View duration={500} easing='ease-in-out' animation={anim} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ overflow: 'hidden', height: 60, width: 60, marginHorizontal: 10, backgroundColor: 'white', borderRadius: 50, backgroundColor: 'red' }}>
                    <Image style={{ width: '100%', height: '100%' }} source={{ uri: photo || 'https://i.pinimg.com/564x/46/53/63/465363f6c1b791bfbf19ab85914aac92.jpg' }} />
                </View>

                <View>
                    <Text style={{ fontSize: 17 }}>{firstName}</Text>
                    <Text style={{ fontSize: 10 }}>{lastName}</Text>
                </View>
            </Animatable.View>


            {/* === Options === */}
            <Animatable.View duration={500} animation={animOptions} style={{ flexDirection: 'row', position: 'absolute', alignItems: 'center' }}>
                <TouchableOpacity style={{ marginHorizontal: 4, alignItems: 'center', justifyContent: 'center', width: 45, height: 45, borderRadius: 50, backgroundColor: Colors.red }}>
                    <Ionicons name={'trash'} size={25} color={'white'} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginHorizontal: 4, alignItems: 'center', justifyContent: 'center', width: 45, height: 45, borderRadius: 50, backgroundColor: Colors.yellow }}>
                    <Ionicons name={'pencil'} size={25} color={'white'} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginHorizontal: 4, alignItems: 'center', justifyContent: 'center', width: 45, height: 45, borderRadius: 50, backgroundColor: Colors.green }}>
                    <Ionicons name={'bookmark'} size={25} color={'white'} />
                </TouchableOpacity>
            </Animatable.View>

            {/* === Button === */}
            <TouchableOpacity onPress={() => setOptions(prev => !prev)}>
                <Ionicons name={'ellipsis-horizontal'} size={25} color={'gray'} />
            </TouchableOpacity>
        </View >
    )
}
