import React from "react";
import {Text, View, Button, TextInput, FlatList, SafeAreaView} from 'react-native';
import PortfolioStyle from './portfolio-style.js';

const customers = [
    {
        id: '1',
        name: 'Valentina Alzate',
        address: 'Cra 20 N 56 - 12',
        quota: 50000
    },
    {
        id: '2',
        name: 'Ruben Londoño',
        address: 'Cra 20 N 56 - 12',
        quota: 50000
    },
    {
        id: '3',
        name: 'Daniel Guerra',
        address: 'Cra 20 N 56 - 12',
        quota: 50000
    },
]

const Portfolio = ({navigation}) => {
    return (
        <SafeAreaView style={PortfolioStyle.container}>
            <TextInput style={PortfolioStyle.searchInput} placeholder="Buscar cliente..."/>
            <FlatList
                data={customers}
                renderItem={({item}) =>
                <View style={PortfolioStyle.customerContainer}>
                    <View>
                        <Text style={PortfolioStyle.name}>{item.name}</Text>
                        <Text style={PortfolioStyle.text}>{item.address}</Text>
                        <Text>{item.quota}</Text>
                    </View>
                    <Button 
                        title="Abono"
                        style={PortfolioStyle.btnQuota}
                    />
                </View>
                 }
                keyExtractor={item => item.id}
            />
            
            <Button 
                title="Crear Cliente"
                onPress={()=>{navigation.navigate('CustomerForm')}}
            />
        </SafeAreaView>
    )
}

export default Portfolio;