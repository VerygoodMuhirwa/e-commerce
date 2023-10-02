import React, { useState } from "react";
import { Image, Text, TextInput, View, TouchableOpacity } from "react-native";
import styles from "./login.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import { COLORS } from "../constants";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [shown, setShown] = useState(true);

  const validate = () => {
    if (!email.includes("@")) {
      setEmailError("Invalid email");
    } else if (password.length < 6) {
      setPasswordError("Invalid password. Must be at least 8 characters");
    } else if (email.indexOf(" ") >= 0) {
      setEmailError("Invalid email. No spaces allowed");
    } else {
      setEmailError(null);
      setPasswordError(null);
    }
  };
  const togglePasswordVisibility = () => {
    setShown(!shown);
  };

  return (
    <SafeAreaView>
      <View style={styles.imageContainer}>
        <TouchableOpacity>
          <Ionicons
            name="chevron-back-circle-outline"
            size={30}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <Image
          source={require("../assets/images/bk.png")}
          style={styles.Image}
        />
      </View>
      <View>
        <Text style={styles.loginTitle}>Unlimited Luxirious Furniture</Text>
        <View style={styles.loginContainer}>
          <Text style={styles.inputTitle}>Email</Text>
          <View style={styles.input}>
            <Feather
              name="mail"
              size={20}
              color={COLORS.gray}
              style={styles.input.icon1}
            />
            <TextInput
              placeholder="Email"
              style={styles.input.text}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <Text style={{ color: "red" }}>{emailError}</Text>
          <Text style={styles.inputTitle}>Password</Text>
          <View style={styles.input}>
            <MaterialIcons
              name="lock-outline"
              color={COLORS.gray}
              size={20}
              style={styles.input.icon1}
            />
            <TextInput
              placeholder="Password"
              style={styles.input.text}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={shown}
            />
            <Feather
              name={shown ? "eye-off" : "eye"}
              size={20}
              color={COLORS.gray2}
              onPress={togglePasswordVisibility}
            />
          </View>
          <Text style={{ color: "red" }}>{passwordError}</Text>
          <TouchableOpacity
            style={{ ...styles.input, ...styles.loginBtn }}
            onPress={validate}
          >
            <Text style={styles.loginBtnText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.register}>
          <Text>Don't have an Account? Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
