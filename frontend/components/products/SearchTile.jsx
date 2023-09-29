import React from "react";
import { Text, TouchableOpacity, View,Image } from "react-native";
import styles from "./searchTile.styles";

const SearchTile = ()=>{
    return(
        <View>
            <TouchableOpacity style={styles.container}>
                <View style={styles.image}>
                    <Image source={{}}/>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default SearchTile