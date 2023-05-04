import React from 'react';
import BookList from './BookList';
import { useRemoteService } from './hooks';
const BookListContainer = () => {
    const { data, loading, error } = useRemoteService([]);
<<<<<<< HEAD
=======
    // if (loading) {
    //     return <p>Loading...</p>;
    // }
    // if (error) {
    //     return <p>Error...</p>;
    // }
>>>>>>> 1413a4ac75ff574c3691b5b56413919e795b269a
    return <BookList books={data} loading={loading} error={error} />
};
export default BookListContainer;