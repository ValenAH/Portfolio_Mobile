import React from "react";
import {View,Text, TextInput} from 'react-native';
import QuotaStyles from "./quota-style";

const Quota = ({route}) => {
    const {id} = route.params;

    return (
        <View style={QuotaStyles.container}>
            <Text style={QuotaStyles.text}>id: {JSON.stringify(id)}</Text>
            <TextInput style={QuotaStyles.input}/>
        </View>
    )
}

export default Quota;