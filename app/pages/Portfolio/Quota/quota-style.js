import { StyleSheet } from "react-native";

const QuotaStyles = StyleSheet.create({
    container:{
        backgroundColor: '#0F0F0F',
        padding: 20,
        height: '100%',
        display: "flex",
        justifyContent:"start",
        alignItems: "center"
    },
    text: {
        color: "white",
        fontSize: 16,
        fontWeight: 500,
    },
    input: {
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
    searchInput: {
        height: 20,
        color: "white",
    },
    btnQuota: {
        backgroundColor: "#7AC4F5",
        borderRadius: 5,
        height: 35,
        width: '90%',
        justifyContent:"center",
        paddingVertical: 8,
        paddingHorizontal: 15,
        marginTop:10,
    },
    registerQuota: {
        textAlign: "center",
        fontWeight: 'bold'
    }
})

export default QuotaStyles;