import React, { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { SelectList } from "react-native-dropdown-select-list"

const customers = [
  { key: "1", value: "Daniel Guerra" },
  { key: "2", value: "Ruben Londono" },
  { key: "3", value: "Valentina Alzate" }
];

const SaleForm = ({ navigation }) => {
  
  const[fecha, setFecha] = useState('');
  const [selectedValue, setSelectedValue] = useState('item1');

  const handleFechaChange  = (e) => {
    setFecha(e)
  }

  return(
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
            NUEVA VENTA
          </Text>
        </View>
        <View style={{ marginVertical: "3%" }}>
          <Text style={styles.lbl}>Fecha</Text>
          <View style={{ marginTop: "1.5%" }}>
            <TextInput
              style={styles.input}
              placeholder="August 28, 2023"
              placeholderTextColor={"white"}
              onChangeText={handleFechaChange}
              value={fecha}
            />
          </View>
        </View>
        <View style={{ paddingTop: "2%" }}>
          <SelectList
                  setSelected={(val) => setSelectedValue(val)}
                  save="value"
                  dropdownTextStyles={{ color: "white" }}
                  placeholder="Ingrese documento"
                  placeholderTextColor={{ color: "white" }}
                  data={customers}
          />
        </View>
        <View
            style={{
              flex: 2,
              borderWidth: 1,
              justifyContent: "center",
            }}
          >
          <Button
            title="Registrar nuevo cliente"
            placeholderTextColor="#000000"
            color="#7AC4F5"
            onPress={() => {
              navigation.navigate("Portfolio");
            }}
          />
        </View>

        <View style={{ display: "flex", flexDirection: "column" }}>
          
          <View style={{ display: "flex", flexDirection:"row", gap: 20, margin: 5, backgroundColor: "#3C3C3C", padding: 15  }}>
            <Text style={{ fontSize: 15, color: "#FFFFFF", fontWeight: "bold" }}>
                Doble Pillow 100 x 190
              </Text>
              <Text style={{ fontSize: 15, color: "#daa520", fontWeight: "bold" }}>
                600.000
              </Text>
          </View>
          
          <View style={{ display: "flex", flexDirection:"row", gap: 20, margin: 5, backgroundColor: "#3C3C3C", padding: 15}}>
            <Text style={{ fontSize: 15, color: "#FFFFFF", fontWeight: "bold" }}>
                Doble Pillow 140 x 190
              </Text>
              <Text style={{ fontSize: 15, color: "#daa520", fontWeight: "bold" }}>
                1'000.000
              </Text>
          </View>
          
          <View style={{ display: "flex", flexDirection:"row", gap: 20, margin: 5, backgroundColor: "#3C3C3C", padding: 15}}>
            <Text style={{ fontSize: 15, color: "#FFFFFF", fontWeight: "bold" }}>
                Semiortopedico 140 x 190
              </Text>
              <Text style={{ fontSize: 15, color: "#daa520", fontWeight: "bold" }}>
                430.000
              </Text>
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
            title="Facturar"
            placeholderTextColor="#000000"
            color="#7AC4F5"
            onPress={() => {
              navigation.navigate("Portfolio");
            }}
          />
        </View>
    </View>
  )
}

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

export default SaleForm;