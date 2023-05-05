import React, { useEffect, useState } from 'react'
import { useRemoteService } from './hooks';
import { useParams } from 'react-router';
import BookDetail from './BookDetail';
const BookDetailContainer = () => {
  const params = useParams();
  const { id } = params;
  const { data } = useRemoteService(`http://locahost:8080/books/${id}`, {})
  const [book, setBook] = useState({});

  useEffect(() => {
    const fetchBook = async () => {
      setBook(data);
    }
    fetchBook()
  }, [id])

  return (
    <BookDetail book={book} />
  )
}

export default BookDetailContainer;
