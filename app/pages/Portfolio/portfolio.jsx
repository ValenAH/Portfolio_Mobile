import React from "react";
import {Text, View, TextInput, FlatList, SafeAreaView, Pressable} from 'react-native';
import PortfolioStyle from './portfolio-style.js';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const customers = [
    {
        id: '1',
        name: 'Valentina Alzate',
        address: 'Cra 20 N 56 - 12',
        quota: '50.000'
    },
    {
        id: '2',
        name: 'Ruben Londoño',
        address: 'Cra 20 N 56 - 12',
        quota: '50.000'
    },
    {
        id: '3',
        name: 'Daniel Guerra',
        address: 'Cra 20 N 56 - 12',
        quota: '50.000'
    },
    {
        id: '4',
        name: 'Bernardo',
        address: 'Cra 20 N 56 - 12',
        quota: '100.000'
    },
]

const Portfolio = ({navigation}) => {
    return (
        <SafeAreaView style={PortfolioStyle.container}>
            <TextInput style={PortfolioStyle.searchInput} placeholder="Buscar cliente..." placeholderTextColor={'rgb(131 129 129)'}/>
            <FlatList
                data={customers}
                style={PortfolioStyle.listContainer}
                renderItem={({item}) =>
                <View style={PortfolioStyle.customerContainer}>
                    <View>
                        <Text style={PortfolioStyle.name}>{item.name}</Text>
                        <Text style={PortfolioStyle.text}>{item.address}</Text>
                        <Text style={PortfolioStyle.text}>{item.quota}</Text>
                    </View>
                    <Pressable style={PortfolioStyle.btnQuota}
                    onPress={()=>{navigation.navigate('Quota', {id: item.id});}}
                    >
                        <Text style={PortfolioStyle.text}>Abonar</Text>
                    </Pressable>
                </View>
                 }
                keyExtractor={item => item.id}
            />
            <Pressable style={PortfolioStyle.saleBtn}
            onPress={()=>{navigation.navigate('CustomerForm')}}
            >
                <Text style={PortfolioStyle.saleText}>Nueva venta</Text>
            </Pressable>
            <View style={PortfolioStyle.reportsContainer}>
                <View style={PortfolioStyle.reportContainer}>
                    <MaterialCommunityIcons name="cash" size={24} color="#EABE3F" />
                    <Text style={PortfolioStyle.text}>Abonos</Text>
                    <Text style={PortfolioStyle.text}>20</Text>
                </View>
                <View style={PortfolioStyle.reportContainer}>
                <Ionicons name="md-bar-chart" size={20} color="#EABE3F" />
                    <Text style={PortfolioStyle.text}>Ventas</Text>
                    <Text style={PortfolioStyle.text}>15</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Portfolio;