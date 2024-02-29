import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";

import { BooksGenreContextProvider } from "./src/services/books/booksGenre.context";
import { BooksContextProvider } from "./src/services/books/books.context";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { HomeScreen } from "./src/features/home/screens/home.screen";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  
  return (
    <>
    <ThemeProvider theme={theme}>
      <BooksGenreContextProvider>
        <BooksContextProvider>
          <HomeScreen />
        </BooksContextProvider>
      </BooksGenreContextProvider>
    </ThemeProvider>
    <ExpoStatusBar style="auto" />
    </>
  );
}

