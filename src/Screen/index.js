
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../Utils/Constant/Color';
import DetailsScreen from './Details';
import HomeScreen from './Home';

const Stack = createNativeStackNavigator();

export default function MainScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ statusBarColor: Colors.coklat, headerShown: false }} >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name='Details' component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}