import React from "react";
import {ScrollView, Text,TouchableOpacity,View} from "react-native"
import {SafeAreaView} from "react-native-safe-area-context" 
import styles from "./newRivals.styles";
import {Ionicons}  from "@expo/vector-icons"
import { COLORS } from "../constants";

const NewRivals= ({navigation})=>{

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <View style= {styles.upperRow}>
                    <TouchableOpacity onPress={()=> navigation.goBack()}>
                        <Ionicons name="chevron-back-circle"
                        size={30}
                        color={COLORS.lightWhite}    
                    />
                    </TouchableOpacity>
                    <Text style={styles.heading}>Products</Text>
                </View>
                <ScrollView>
                    
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export  default NewRivals