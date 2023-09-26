import React from "react";
import { FlatList, View, Text, ActivityIndicator } from "react-native";
import useFetch from "../../hook/useFetch";
import { COLORS, SIZES } from "../../constants";
import styles from "./productList.styles";

const ProductList = ()=>{
    const {data, isLoading} = useFetch()
    if(isLoading){
        return(
            <View style={styles.loadingContainer}>
                <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
            </View>
        )
    }
    return(
        <View style={styles.container}>

        </View>
    )
}