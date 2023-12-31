import { StyleSheet } from "react-native";

const LoginStyles = StyleSheet.create({
    container:{
        backgroundColor: '#0F0F0F',
        padding: 20,
        height: '100%',
        display: "flex",
        justifyContent:"center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: 20
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
    btn: {
        width: '90%',
        backgroundColor: "#7aC4f5",
        borderRadius: 5,
        marginTop: 20,
    },
    btnText: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        margin: 10,
    }
})

export default LoginStyles;