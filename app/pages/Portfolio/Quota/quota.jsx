import React, { useState } from "react";
import {View,Text, TextInput} from 'react-native';
import QuotaStyles from "./quota-style";
import { SelectList } from "react-native-dropdown-select-list"

const customers = [
    { key: "1", value: "Daniel Guerra" },
    { key: "2", value: "Ruben Londono" },
    { key: "3", value: "Valentina Alzate" }
  ];

  const credit = [
    { key: "1", value: "CR001" },
    { key: "2", value: "CR050" },
    { key: "3", value: "CR020" }
  ];

const Quota = ({route}) => {
    const {id} = route.params;
    const [customer, setCustomer] = useState('');
    const [credit, setCredit] = useState('');

    return (
        <View style={QuotaStyles.container}>
            <Text style={QuotaStyles.text}>id: {JSON.stringify(id)}</Text>
            <TextInput style={QuotaStyles.input} placeholder="09/10/2023"/>
            <SelectList
                setSelected={(customer) => setCustomer(customer)}
                save="value"
                dropdownTextStyles={{ color: "white" }}
                placeholder="Buscar cliente            "
                inputStyles={QuotaStyles.searchInput}
                data={customers}
            />
            <SelectList
                setSelected={(val) => setCredit(val)}
                save="value"
                dropdownTextStyles={{ color: "white" }}
                placeholder="Buscar creditos          "
                inputStyles={QuotaStyles.searchInput}
                data={customers}
            />
        </View>
    )
}

export default Quota;