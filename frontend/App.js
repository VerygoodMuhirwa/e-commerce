import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { Cart, ProductDetails,NewRivals } from './screens';
import { useFonts } from 'expo-font';


const Stack=createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    bold : require("./assets/fonts/OpenSans-Italic.ttf"),
  })
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name='Bottom Tab Navigation'
            component={BottomTabNavigation}
            options={{headerShown:false}}
          />
          <Stack.Screen
            name='Cart'
            component={Cart}
          />
          <Stack.Screen
            name='ProductDetails'
            component={ProductDetails}
            options={{headerShown:false}}
          />
          <Stack.Screen
            name='ProductList'
            component={NewRivals}
            options={{headerShown:false}}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}