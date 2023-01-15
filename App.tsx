import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AuthProvider from "./src/context/AuthContext";
import AppNavigation from "./src/navigation/AppNavigation";

//TODO zapisywanie lokalizacji do localStorage przy starcie apki
//ewentualnie robic potem update co x czasu
export default function App() {
  return (
    <AuthProvider>
      <AppNavigation></AppNavigation>
    </AuthProvider>
  );
}
