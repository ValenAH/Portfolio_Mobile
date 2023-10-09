import { StyleSheet } from "react-native";

const PortfolioStyle = StyleSheet.create({
    container:{
        backgroundColor: '#0F0F0F',
        padding: 20,
        height: '100%',
        display: "flex",
        justifyContent:"start",
        alignItems: "center"
    },
    searchInput: {
        height: 40,
        width: '90%',
        margin: 12,
        padding: 10,
        color: 'rgb(131 129 129)',
        borderWidth: 1,
        borderColor: 'rgb(131 129 129)',
        borderRadius: 5,
        fontSize: 20,
    },
    customerContainer: {
        flex: 1,
    },
    name: {
        color: '#EABE3F',
        fontSize: 20,
        fontWeight: "bold",
    },
    text: {
        color: "white",
        fontSize: 16
    },
    btnQuota: {
        backgroundColor: '#0F0F0F',
        color: '#7AC4F5',
        borderWidth: 1,
        borderColor: '#7AC4F5',
        borderRadius: 5
    }
})

export default PortfolioStyle;