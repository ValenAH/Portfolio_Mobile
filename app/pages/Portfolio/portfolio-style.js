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
    listContainer: {
        width: '95%',
        height: '80%',
    },
    customerContainer: {
        padding: 20,
        margin: 5,
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#292828',
        borderRadius: 5,
    },
    name: {
        color: '#EABE3F',
        fontSize: 20,
        fontWeight: "bold",
    },
    text: {
        color: "white",
        fontSize: 16,
        fontWeight: 500,
    },
    btnQuota: {
        backgroundColor: '#0F0F0F',
        borderWidth: 1,
        borderColor: '#7AC4F5',
        borderRadius: 5,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 15,
    },
    reportsContainer: {
        width: '90%',
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 10,
        gap: 10,
    },
    reportContainer: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: "center",
        padding: 8,
        borderWidth: 1,
        borderColor: "white",
        height: 40,
        borderRadius: 5,
    },
    saleBtn: {
        position: 'absolute',
        bottom: 80,
        width: '90%',
        backgroundColor: "#7aC4f5",
        borderRadius: 5,
    },
    saleText: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        margin: 15,
    }
})

export default PortfolioStyle;