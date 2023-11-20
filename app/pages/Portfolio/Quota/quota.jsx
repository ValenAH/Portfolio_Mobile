import React, { useState, useEffect } from "react";
import {View,Text, TextInput, Pressable, ActivityIndicator} from 'react-native';
import FlashMessage from "react-native-flash-message";
import { showMessage } from "react-native-flash-message";
import QuotaStyles from "./quota-style";
import axios from "axios";

const Quota = ({route}) => {
    const {id} = route.params;
    const [sale, setSale] = useState({consecutive: "",saleId:id, customer:{name: ""}});
    const [amount, setAmount] = useState(0);
    const [currentDate, setCurrentDate] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect( () => {
        const getSaleById = async () => {
            await axios.post('https://localhost:7291/api/Sale/GetSaleById',{id: id})
            .then((response)=> {
                setSale(response.data.data)
            })
            .catch(()=> { console.log('No se encontro la venta') })
        }
        const getCurrentDate = () => {
            let date = new Date();
            setCurrentDate(date.getFullYear()+"-"+ (date.getMonth()+1)+ "-" +date.getDate())
        }
        getSaleById();
        getCurrentDate();
    }, [])
    const handleChange = (e) => {
        setSale({...sale, [e.target.name]: e.target.value
        })
    }
    const handleAmount = (e)=> {
        setAmount(Number(e.target.value))
    }

    const saveQuota = async () => {
        setLoading(true)
        let data = {
            amount: amount,
            date: currentDate,
            saleId: id,
            isPayed: true
        }
        await axios.post("https://localhost:7291/api/Quota/SaveQuota",data)
        .then( ()=> {
            setLoading(false)
            showMessage({message:"Se ha registrado con éxito", type:"success", icon:"success"})})
        .catch( showMessage({message:"Ocurrió un error al registrar el abono", type:"danger", icon:"danger"}))
    }

    return (
        <View style={QuotaStyles.container}>
            <Text style={QuotaStyles.text}>id: {JSON.stringify(id)}</Text>
            <TextInput style={QuotaStyles.input} placeholder="Fecha del abono" value={currentDate} onChange={handleChange} editable={false}/>
            <TextInput style={QuotaStyles.input} placeholder="Nombre del cliente" value={sale.customer.name} onChange={handleChange} editable={false}/>
            <TextInput style={QuotaStyles.input} placeholder="Número de crédito" value={sale.consecutive} onChange={handleChange} editable={false}/>
            <TextInput style={QuotaStyles.input} placeholder="Valor del abono" value={sale.amount} onChange={handleAmount}/>
            <Pressable style={QuotaStyles.btnQuota} onPress={saveQuota} disabled={amount == ''}>
                <Text style={QuotaStyles.registerQuota}>Registrar abono</Text>
            </Pressable>
            <ActivityIndicator size="large" color="#EABE3F" animating={loading}/>
            <FlashMessage position={"bottom"}/>
        </View>
    )
}

export default Quota;