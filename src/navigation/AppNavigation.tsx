import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import { ActivityIndicator, View } from "react-native";
import { AuthContext } from "../context/AuthContext";
import AuthorizedTabNavigation from "./AuthorizedTabNavigation";
import DefaultTabNavigation from "./DefaultTabNavigation";

const Tab = createBottomTabNavigator();

const AppNavigation: React.FC = () => {
  const { userLogged }: any = useContext(AuthContext);
  return (
    <NavigationContainer>
      {userLogged === true ? (
        <AuthorizedTabNavigation />
      ) : (
        <DefaultTabNavigation />
      )}
    </NavigationContainer>
  );
};

export default AppNavigation;
