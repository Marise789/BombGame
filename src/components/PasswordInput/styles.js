import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components";

export const Container = styled.View`
  margin: ${RFValue(30)}px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
`;
export const InputContainer = styled.View`
  border: 1px solid white;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput`
  font-size: ${RFValue(30)}px;
  padding: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  border-radius: ${RFValue(5)}px;
  width: 100%;
  background-color: ${(props) =>
    props.abled === false ? "#9999998c" : "transparent"};
`;