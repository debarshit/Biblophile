import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView, FlatList, Text, View } from "react-native";
import styled from "styled-components/native";

import { Spacer } from "../../../components/spacer/spacer.component";

import { BookListContainer } from "../components/book-list-container.component";

import { BooksGenreContext } from "../../../services/books/booksGenre.context";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const BookGenreListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const HomeScreen = () => {
  const { isLoadingBooksGenre, errorBooksGenre, booksGenre } = useContext(BooksGenreContext);
  console.log(errorBooksGenre);
  return (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <BookGenreListContainer>
      <FlatList
        data={booksGenre}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <Text>{item.BookGenre}</Text>
              <BookListContainer book={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.BookGenre}
      />
    </BookGenreListContainer>
  </SafeArea>
  );

 };