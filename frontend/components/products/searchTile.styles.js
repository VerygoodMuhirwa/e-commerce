import { StyleSheet } from "react-native";
import { COLORS,SIZES,SHADOWS } from "../../constants";

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "space-between",
        alignItems:"center",
        marginBottom: SIZES.small,
        flexDirection:"row",
        padding:SIZES.medium,
        borderRadius:SIZES.small,
        backgroundColor: "#FFF",
        ...SHADOWS.medium,
        shadowColor: COLORS.lightWhite
    },
    image:{
        width: 70,
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.medium,
        justifyContent:"center",
        alignContent:"center"
    },
})

export default styles