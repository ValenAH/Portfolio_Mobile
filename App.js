import Login from "./app/pages/Auth/Login/login";
import Portfolio from "./app/pages/Portfolio/portfolio";
import Quota from "./app/pages/Portfolio/Quota/quota";
import Customer from "./app/pages/Customer/customer";
import CustomerForm from "./app/pages/Customer/customer-form";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{title: "LOGIN",...options}} name="Login" component={Login} />
        <Stack.Screen options={{title: "CARTERA",...options}} name="Portfolio" component={Portfolio} />
        <Stack.Screen options={{title: "Registrar abono",...options}} name="Quota" component={Quota} />
        <Stack.Screen options={{title: "CARTERA",...options}} name="CustomerForm" component={CustomerForm} />
        <Stack.Screen name="Customer" component={Customer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const options = {
  headerStyle: {
    backgroundColor: "black",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerTitleAlign: "center"
}

