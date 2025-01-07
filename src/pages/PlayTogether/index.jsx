import React from 'react'
import { BombMessage, Container, Title } from './styles';
import { useNavigation } from '@react-navigation/native';
import InputPassword from '../../components/PlayTogether/InputPassword';
import InputTimer from '../../components/InputTimer';
import TipInput from '../../components/PlayTogether/TipInput';
import { ButtonComponent } from '../../components/Button';
import { Alert } from 'react-native';

export default function PlayTogether() {
  const navigation = useNavigation();
    
    function handleStartGame() {
      Alert.alert("Jogo começou!")
    }
    function handleNavToStart() {
        navigation.navigate("Start");
    }

  return (
     <scrollContainer>
    <Container>
     <Title>Bomb Game Dupla</Title>
      <InputTimer />
      <BombMessage>Mensagem de erro temporária!</BombMessage>
      <TipInput  />
      <InputPassword />
      <ButtonComponent buttonText="Iniciar" handlePress={handleStartGame} />
      <ButtonComponent buttonText="Página Inicial" handlePress={handleNavToStart} />
    </Container>
     </scrollContainer>
);
}