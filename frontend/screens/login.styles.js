import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../constants";

const styles = StyleSheet.create({
    imageContainer:{
        flexDirection:"row",
        justifyContent:"center",
        marginHorizontal:12,
    },
    Image:{
        width: '90%',
        height:350,
        resizeMode:"contain"
    },
    loginTitle:{
        fontSize: 25,
        fontWeight:"bold",
        color: COLORS.primary,
        marginTop:SIZES.medium,
        alignSelf:"center",
    },
})

export default styles