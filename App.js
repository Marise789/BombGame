import React, { useCallback, useEffect } from "react";
import { StatusBar, View } from "react-native";
import Routes from "./src/routes";
import * as SplashScreen from "expo-splash-screen";
import { ThemeProvider } from "styled-components";
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";
import theme from "./src/global/styles/theme";

// App Component
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync(); // Impede a tela de splash de desaparecer antes do carregamento
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync(); // Esconde a tela de splash quando as fontes estiverem carregadas
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Retorna null até as fontes serem carregadas
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <StatusBar style="light" />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </View>
  );
}
