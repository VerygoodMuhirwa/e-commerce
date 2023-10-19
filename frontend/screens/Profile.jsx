import { View } from "react-native";
import { LogedUser, NotLogedUser } from "../components";
import { useEffect, useState } from "react";

const Profile = ({ route }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return <View>{isLoggedIn ? <LogedUser /> : <NotLogedUser />}</View>;
};
export default Profile;
