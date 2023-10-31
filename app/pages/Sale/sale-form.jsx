import React, { useEffect, useState } from "react";
import axios from 'axios';

import { Text, View, TextInput, Button, StyleSheet, FlatList, ScrollView } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { CheckBox } from "react-native-elements";

// const customers = [
//   { key: "1", value: "Daniel Guerra" },
//   { key: "2", value: "Ruben Londono" },
//   { key: "3", value: "Valentina Alzate" },
// ];

const SaleForm = ({ navigation }) => {
  const [fecha, setFecha] = useState("");
  const [selectedValue, setSelectedValue] = useState("item1");
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [selectedProductIds, setSelectedProductIds] = useState([]);

  const toggleProductCheckbox = (productId) => {
    setSelectedProductIds((prevSelectedProductIds) => {

      if (prevSelectedProductIds.includes(productId)) {
        return prevSelectedProductIds.filter(id => id !== productId);
      } else {
        return [...prevSelectedProductIds, productId];
      }
    });
  };

  const facturar = () => {
    console.log(selectedProductIds);
  }

  useEffect(() => {
    const productsList = async () => {
      try{
        const response = await axios.get('https://localhost:7291/api/Product/GetProducts');

        setProducts(response.data.data);
      }
      catch (error) {
        console.error(error);
      }
      
    };

    const customerList = async () => {
      try {
        const response = await axios.get('https://localhost:7291/api/Customer/GetCustomers');

        const filteredCustomers = response.data.data.map(customer => ({
          label: customer.id.toString(), // Convierte el ID a cadena si es necesario
          value: customer.name
        }))

        setCustomers(filteredCustomers);
      }
      catch (error) {

      }
    }
    
    productsList();
    customerList();
  }, []);
  
  const handleFechaChange = (e) => {
    setFecha(e);
  };

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
            inputStyles={styles.whitePlaceholder}
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
              navigation.navigate("CustomerForm");
            }}
          />
        </View>

        <View style={{ display: "flex", flexDirection: "column", maxHeight: 200 }}>
        <ScrollView>
          <FlatList
              data={products}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 20,
                  margin: 5,
                  backgroundColor: "#3C3C3C",
                  padding: 15,
                }}
              >
                <Text
                  style={{ fontSize: 15, color: "#FFFFFF", fontWeight: "bold" }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{ fontSize: 15, color: "#daa520", fontWeight: "bold" }}
                >
                  {item.price}
                </Text>
                <CheckBox
                  title=""
                  size={20}
                  checked={selectedProductIds.includes(item.id)}
                  onPress={() => toggleProductCheckbox(item.id)}
                />
              </View>
              )}
              />
        </ScrollView>
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
          onPress={facturar}
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
  whitePlaceholder: {
    color: "white",
  },
});

export default SaleForm;
