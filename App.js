import Portfolio from "./app/pages/Portfolio/portfolio";
import Customer from "./app/pages/Customer/customer";
import CustomerForm from "./app/pages/Customer/customer-form";
import Sale from "./app/pages/Sale/sale";
import SaleForm from "./app/pages/Sale/sale-form";
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
          name="SaleForm"
          component={SaleForm}
        />
        <Stack.Screen name="Customer" component={Customer} />
        <Stack.Screen name="Sale" component={Sale} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}