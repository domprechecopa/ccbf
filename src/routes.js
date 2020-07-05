import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';

const Stack = createStackNavigator();

export default function Routes(){
    return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" headerMode="none"
         options={{headerShown: false}}>
            <Stack.Screen name="Login" component={LoginPage}/>
            <Stack.Screen name="Register" component={RegisterPage} />
        </Stack.Navigator>
    </NavigationContainer>
    );
};