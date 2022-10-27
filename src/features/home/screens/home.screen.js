import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView, FlatList, Text, View } from "react-native";
import styled from "styled-components/native";

import { Spacer } from "../../../components/spacer/spacer.component";

import { BookListContainer } from "../components/book-list-container.component";

import { BooksContext } from "../../../services/books/books.context";

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
  const { isLoading, error, books } = useContext(BooksContext);
  console.log(error);
  return (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <BookGenreListContainer>
    <FlatList
      data={books}
      renderItem={({ item }) => {
        return (
          <Spacer position="bottom" size="large">
            <BookListContainer book={item} />
          </Spacer>
        );
      }}
      keyExtractor={(item) => item.BookId}
    />
    </BookGenreListContainer>
  </SafeArea>
  );

 };