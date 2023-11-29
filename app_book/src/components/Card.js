import React from 'react';
import { useGetBooksQuery } from '../features/api/apiSlice';
import Cards from './Cards';

export default function Card() {
  const { data: book, isLoading, isError } = useGetBooksQuery();
  let contant = null;
  if (isLoading) {
    contant = <div>Loading...</div>;
  }
  if (!isLoading && isError) {
    contant = <div>There was data fatching error</div>;
  }
  if (!isLoading && !isError && book.length === 0) {
    contant= <div>No book Found!...</div>
  }
  if (!isLoading && !isError && book.length > 0) {
    contant = book.map((cards) => <Cards key={cards.id} cards={cards} />);
    }
  return (
    <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
      {contant}
    </div>
  );
}
