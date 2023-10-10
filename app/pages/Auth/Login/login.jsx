import React from "react";
import { View, Text, TextInput, Pressable, Image } from "react-native";
import LoginStyles from "./login-style";

const Login = ({ navigation }) => {
  return (
    <View style={LoginStyles.container}>
      <Image source={require("../../../../assets/images/Logo.png")} />
      <Text style={LoginStyles.title}>¡BIENVENIDO!</Text>
      <TextInput
        style={LoginStyles.input}
        placeholder="Usuario"
        placeholderTextColor={"rgb(131 129 129)"}
      />
      <TextInput
        style={LoginStyles.input}
        placeholder="Contraseña"
        placeholderTextColor={"rgb(131 129 129)"}
        secureTextEntry={true}
      />
      <Pressable style={LoginStyles.btn}>
        <Text
          style={LoginStyles.btnText}
          onPress={() =>
            navigation.navigate("Portfolio", { screen: "Portfolio" })
          }
        >
          Iniciar Sesión
        </Text>
      </Pressable>
    </View>
  );
};

export default Login;
