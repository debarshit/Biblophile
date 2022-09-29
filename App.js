import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

import { HomeScreen } from "./src/features/home/screens/home.screen";

export default function App() {
  return (
    <>
    <HomeScreen />
    <ExpoStatusBar style="auto" />
    </>
  );
}

