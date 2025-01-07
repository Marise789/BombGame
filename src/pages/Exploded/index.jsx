import React from "react";
import { Container, FailedImg, Logo, Title } from "./styles";
import logoImg from "../../assets/logoLightRed.png";
import failedImg from "../../assets/bomba_explodiu.png";
import { Vibration } from "react-native";
import ButtonComponent from "../../components/Buttons";
import { useNavigation } from "@react-navigation/native";

export default function Exploded() {
    const navigation = useNavigation();

    function handleNavToStart() {
        navigation.navigate("Start");
      }
    
      setTimeout(function () {
        Vibration.vibrate(4 * 1000);
      }, 500);
    
      return (
        <Container>
          <Logo source={logoImg} style={{ resizeMode: "contain" }} />
          <Title>Você falhou, a {"\n"} bomba explodiu!</Title>
          <FailedImg source={failedImg} style={{ resizeMode: "contain" }} />
          <ButtonComponent
            buttonText={"Página incial"}
            handlePress={handleNavToStart}
          />
        </Container>
      );
}