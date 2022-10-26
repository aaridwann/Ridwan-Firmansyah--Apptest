import { View } from 'react-native'
import React, { Suspense, useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native'
import Colors from '../../Utils/Constant/Color'
import { useRoute } from '@react-navigation/native';
import UseFetchdata from '../../Utils/CustomHooks/useFetchData';
import { filterData } from '../../Redux/slice';
import LoadingComponent from '../../Components/LoadComponent/LoadingComponent';
const TopBarComponent = React.lazy(() => import('../../Components/TopBar/TopBar'));
const SearchInputComponent = React.lazy(() => import('../../Components/InputComponent/InputComponent'))
const FavoriteComponent = React.lazy(() => import('../../Components/FavoriteComponent/FavoriteComponent'));
const ContactComponent = React.lazy(() => import('../../Components/ContactComponent/ContactComponent'));
const AlertComponent = React.lazy(() => import('../../Components/Alert/AlertComponent'));


export default function HomeScreen() {
    const dispatch = useDispatch()
    const navigate = useNavigation()
    const route = useRoute()
    const { filter, error, message, favorite, data } = useSelector(state => state.contact)


    const Search = useCallback((name) => {
        dispatch(filterData(name))
    }, [])

    useEffect(() => {
        UseFetchdata('https://simple-contact-crud.herokuapp.com/contact', dispatch)
    }, [])

    return (
        <View style={{ flex: 1, width: '100%', alignItems: 'center', backgroundColor: Colors.white }}>
            {error && <AlertComponent dispatch={dispatch} title={'Error'} message={message} />}
            <View style={{ backgroundColor: Colors.coklat, position: 'absolute', width: '100%', height: 100 }} />

            {/* Top Bar Component */}
            <Suspense fallback={<LoadingComponent />}>
                <TopBarComponent title={route.name} style={{ marginTop: 5 }} rightIconMethod={() => navigate.navigate('Add Contact')} />
            </Suspense>

            {/* Search Component */}
            <Suspense fallback={<LoadingComponent />}>
                <SearchInputComponent input={(data) => Search(data)} style={{ marginTop: 35 }} />
            </Suspense>

            {/* Favorite Contact Component */}
            <Suspense fallback={<LoadingComponent />}>
                <FavoriteComponent favoriteData={favorite} style={{ marginTop: 20 }} />
            </Suspense>

            {/* Contact Content */}
            <Suspense fallback={<LoadingComponent />}>
                <ContactComponent />
            </Suspense>
        </View>
    )
}