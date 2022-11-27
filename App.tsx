import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import MapScreen from "./src/views/MapScreen";
import ProfileScreen from "./src/views/ProfileScreen";

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// export default function App() {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen
//             name="Find Racks"
//             component={MapScreen}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
// }

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
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
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
