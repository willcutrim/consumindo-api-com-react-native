import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from "@screens/Home";
import { Vendas } from "@screens/Vendas";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
                <Stack.Screen 
                    name='Home'
                    component={Home}
                />
                <Stack.Screen 
                    name='Vendas'
                    component={Vendas}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}