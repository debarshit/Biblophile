import React from "react";
import { Text } from "../../../components/typography/text.component";


import {
  BookCard,
  BookCardCover,
  Info,
} from "./book-icon-card.styles";

export const BookIconCard = ({ book = {} }) => {
  const {
    BookName = "Some Book hddhdfhdhdf",
    BookPhotos = [
      "https://media.gettyimages.com/photos/stack-of-books-picture-id157482029?s=612x612",
    ],
  } = book;

  return (
    <BookCard elevation={5}>
      <BookCardCover key={BookName} source={{ uri: BookPhotos[0] }} />
      <Info>
        <Text variant="label">{BookName}</Text>
      </Info>
    </BookCard>
  );
};