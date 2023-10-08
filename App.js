import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Portfolio from './app/pages/portfolio';
import Customer from './app/pages/Customer/customer'; 
import CustomerForm from './app/pages/Customer/customer-form';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Portfolio' component={Portfolio}/>
            <Stack.Screen name='CustomerForm' component= {CustomerForm}/>
            <Stack.Screen name='Customer' component={Customer}/>

        </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
