import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, StyleSheet } from "react-native";
import { LogedUser, NotLogedUser } from "../components";
import { useState } from "react";

const Profile = () => {
  const [isLogged, setIsLogged] = useState(true);
  return <View>{isLogged ? <LogedUser /> : <NotLogedUser />}</View>;
};
export default Profile;
