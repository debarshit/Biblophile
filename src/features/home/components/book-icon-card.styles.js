import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const BookCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const BookCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;