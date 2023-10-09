import React, { Component } from "react";
import {Text, View, TextInput,Button,StyleSheet} from 'react-native';

const CustomerForm = ({navigation})=>{
     
        return (
            <View>
                <Text>Registrar Cliente</Text>
                <Text>Tipo de Documento</Text>
                <TextInput style={styles.input}/>
                <Text>Número de Documento</Text>
                <TextInput style={styles.input}/>
                <Text>Nombre del Cliente</Text>
                <TextInput style={styles.input}/>
                <Text>Teléfono</Text>
                <TextInput style={styles.input}/>
                <Text>Correo Electrónico</Text>
                <TextInput style={styles.input}/>
                <Text>Dirección</Text>
                <TextInput style={styles.input}/>
                <Button 
                    title="Registrar"
                    style={styles.btn}
                    onPress={()=>{navigation.navigate('Portfolio')}}
                    />
                
            </View>
        );
};

const styles = StyleSheet.create({
    input: {
        height: 25,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    btn:{
        height: 25,
        borderRadius: 10
    }
});
    

export default CustomerForm;