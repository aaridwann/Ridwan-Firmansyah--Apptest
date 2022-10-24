import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useWindowDimensions } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from "../../Utils/Constant/Color";

function SearchInputComponent({ style, input, submit }) {
    const { width, height } = useWindowDimensions()
    return (
        <View style={{
            ...style, shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 9, width: width / 1.2, backgroundColor: 'white', borderRadius: 20, paddingHorizontal: 8, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between'
        }}>
            <TextInput onChangeText={(e) => input(e)} placeholderTextColor={Colors.coklat} placeholder="Search..." textAlign="center" style={{ width: '90%', fontWeight: '500', color: Colors.coklat }} />
            <TouchableOpacity onPress={submit}>
                <Ionicons name={'search'} size={25} color={Colors.coklat} />
            </TouchableOpacity>
        </View>
    )
}

export default React.memo(SearchInputComponent)