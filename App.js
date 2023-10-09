import Portfolio from "./app/pages/Portfolio/portfolio";
import Customer from "./app/pages/Customer/customer";
import CustomerForm from "./app/pages/Customer/customer-form";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Portfolio" component={Portfolio} />
        <Stack.Screen
          options={{
            title: "CARTERA",
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
          name="CustomerForm"
          component={CustomerForm}
        />
        <Stack.Screen name="Customer" component={Customer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}