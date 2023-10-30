import React from "react";
import {Text, View, Button} from 'react-native';

const Portfolio = ({navigation}) => {
    return (
        <View>
            <Text>Inicio</Text>
            <Button 
                    title="Crear Cliente"
                    color="#2664bd"
                    onPress={()=>{navigation.navigate('CustomerForm')}}
                    />
        </View>
    )
}

export default Portfolio;