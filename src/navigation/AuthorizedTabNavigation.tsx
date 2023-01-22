import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import UserInfo from "../views/ProfileScreen";
import MapScreen from "../views/MapScreen";
import NewMarkerScreen from "../views/NewMarkerScreen";

const Tab = createBottomTabNavigator();

const AuthorizedTabNavigation: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName={"Map"}>
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="map-marker"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="New Marker"
        component={NewMarkerScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bike" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserInfo}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AuthorizedTabNavigation;
