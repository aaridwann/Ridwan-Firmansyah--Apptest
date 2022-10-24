
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../Utils/Constant/Color';
import AddContactScreen from './AddContact';
import DetailsScreen from './Details';
import HomeScreen from './Home';

const Stack = createNativeStackNavigator();

export default function MainScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ statusBarColor: Colors.coklat, headerShown: false }} >
                <Stack.Screen name="Contact" component={HomeScreen} />
                <Stack.Screen name='Add Contact' component={AddContactScreen} />
                <Stack.Screen name='Contact Details' component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}