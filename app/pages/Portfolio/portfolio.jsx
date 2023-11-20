import React, { useEffect, useState } from "react";
import {Text, View, TextInput, FlatList, SafeAreaView, Pressable, ActivityIndicator} from 'react-native';
import PortfolioStyle from './portfolio-style.js';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';

const Portfolio = ({navigation}) => {

    const [creditSales, setCreditSales]= useState([]);
    const [loading, setLoading] = useState(false);

    useEffect( () => {
        const getCreditSales = async () => {
            setLoading(true)
            try {
                const response = await axios.get("https://localhost:7291/api/Sale/GetCreditSales")
                setCreditSales(response.data.data)
                setLoading(false)
            }
            catch{
                console.log("No hay créditos para mostrar");
            }
        }
        getCreditSales();
    }, []);

    return (
        <SafeAreaView style={PortfolioStyle.container}>
            <TextInput style={PortfolioStyle.searchInput} placeholder="Buscar cliente..." placeholderTextColor={'rgb(131 129 129)'}/>
            <FlatList
                data={creditSales}
                style={PortfolioStyle.listContainer}
                renderItem={({item}) =>
                <View style={PortfolioStyle.customerContainer}>
                    <View>
                        <Text style={PortfolioStyle.name}>{item.customer.name}</Text>
                        <Text style={PortfolioStyle.text}>{item.customer.address}</Text>
                        <Text style={PortfolioStyle.text}>{item.totalAmount}</Text>
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
            <ActivityIndicator size="large" color="#EABE3F" animating={loading}/>
            <Pressable style={PortfolioStyle.saleBtn}
            onPress={()=>{navigation.navigate('SaleForm')}}
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