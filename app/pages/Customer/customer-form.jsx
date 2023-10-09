import React, { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

const data = [
  { key: "1", value: "Cédula de Ciudadania" },
  { key: "2", value: "Cédula de Extranjeria" },
  { key: "3", value: "Pasaporte" },
  { key: "4", value: "NIT" },
];

const CustomerForm = ({ navigation }) => {
  const [value, setSelected] = useState("");
  const [documento, setDocumento] = useState("");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [dirección, setDireccion] = useState("");
  return (
    <View
      style={{
        borderWidth: 1,
        padding: "5%",
        flex: 1,
        backgroundColor: "black",
      }}
    >
      <View style={{ flex: 8 }}>
        <View style={{ alignItems: "center", paddingTop: "5%" }}>
          <Text style={{ fontSize: 20, color: "#daa520", fontWeight: "bold" }}>
            REGISTRAR CLIENTE
          </Text>
        </View>
        <View style={{ paddingTop: "15%" }}>
          <Text style={styles.lbl}>Tipo de Documento</Text>
          <View style={{ paddingTop: "2%" }}>
            <SelectList
              setSelected={(val) => setSelected(val)}
              data={data}
              save="value"
              dropdownTextStyles={{ color: "white" }}
              placeholder="Ingrese documento"
              placeholderTextColor={{ color: "white" }}
            />
          </View>
        </View>
        <View style={{ marginVertical: "3%" }}>
          <Text style={styles.lbl}>Número de Documento</Text>
          <View style={{ marginTop: "1.5%" }}>
            <TextInput
              style={styles.input}
              placeholder="Ingrese documento"
              placeholderTextColor={"white"}
              onChangeText={(text) => setDocumento(text)}
              value={documento}
            />
          </View>
        </View>
        <View style={{ marginVertical: "3%" }}>
          <Text style={styles.lbl}>Nombre del Cliente</Text>
          <View style={{ marginTop: "1.5%" }}>
            <TextInput
              style={styles.input}
              placeholder="Ingrese nombre del cliente"
              placeholderTextColor={"white"}
              onChangeText={(text) => setNombre(text)}
              value={nombre}
            />
          </View>
        </View>
        <View style={{ marginVertical: "3%" }}>
          <Text style={styles.lbl}>Teléfono</Text>
          <View style={{ marginTop: "1.5%" }}>
            <TextInput
              style={styles.input}
              placeholder="Ingrese número de teléfono"
              placeholderTextColor={"white"}
              onChangeText={(text) => setTelefono(text)}
              value={telefono}
            />
          </View>
        </View>
        <View style={{ marginVertical: "3%" }}>
          <Text style={styles.lbl}>Correo Electrónico</Text>
          <View style={{ marginTop: "1.5%" }}>
            <TextInput
              style={styles.input}
              placeholder="Ingrese correo electrónico"
              placeholderTextColor={"white"}
              onChangeText={(text) => setCorreo(text)}
              value={correo}
            />
          </View>
        </View>
        <View style={{ marginVertical: "3%" }}>
          <Text style={styles.lbl}>Dirección</Text>
          <View style={{ marginTop: "1.5%" }}>
            <TextInput
              style={styles.input}
              placeholder="Ingrese dirección"
              placeholderTextColor={"white"}
              onChangeText={(text) => setDireccion(text)}
              value={dirección}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 2,
          borderWidth: 1,
          justifyContent: "center",
        }}
      >
        <Button
          title="Registrar"
          placeholderTextColor="#000000"
          color="#7AC4F5"
          onPress={() => {
            navigation.navigate("Portfolio");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 6,
    height: 40,
    width: "100%",
    paddingLeft: "2%",
  },
  btn: {
    height: 25,
    borderRadius: 10,
  },
  lbl: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
  },
});

export default CustomerForm;
