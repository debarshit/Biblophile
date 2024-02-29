import React, { useContext, useState } from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

import { Spacer } from "../../../components/spacer/spacer.component";

import { BookIconCard } from './book-icon-card.component';

import { BooksContext } from "../../../services/books/books.context";


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28baa',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f633',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d722',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export const BookListContainer = ({ book }) => {
  const { books } = useContext(BooksContext);
 
  const [bookGenre, setBookGenre] = useState(book.BookGenre);

  return (
    <>
        <Text>{book.BookGenre}</Text>
        <Text>{bookGenre}</Text>
        <FlatList
          horizontal={true}
          data={books}
          renderItem={({ item }) => {
            return (
              <Spacer position="right" size="small">
                <BookIconCard book={item} />
              </Spacer>
            );
          }}
          keyExtractor={(item) => item.BookId} />
    </>
  );
  }

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
