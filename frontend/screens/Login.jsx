import React  from "react";
import { Image, Text, View } from "react-native";
import styles from "./login.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import {Ionicons} from "@expo/vector-icons"

const Login = ({navigation}) => {
    return (
        <SafeAreaView>
            <View style={styles.imageContainer}>
                <TouchableOpacity>
                    <Ionicons name="chevron-back-circle-outline" size={30} onPress={()=>navigation.goBack()}/>
                </TouchableOpacity>
                <Image
                    source={require("../assets/images/bk.png")}
                    style={styles.Image}
                />
            </View>
            <View>
                <Text style={styles.loginTitle}>Unlimited Luxirious Furniture</Text>
            </View>
        </SafeAreaView>
    )
}

export default Login