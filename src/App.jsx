import { Typography } from '@mui/material';
import BookListContainer from './BookList/BookListContainer';
import BookDetailContainer from './BookDetail/BookDetailContainer'
import { Route, Routes } from 'react-router';

const App = () => {
	return (
		<div>
			<Typography variant='h2' component='h2' data-test='heading'>
				Bookish
			</Typography>
			<Routes>
				<Route path='/' element={<BookListContainer />} />
				<Route path='/books/:id' element={<BookDetailContainer />} />
			</Routes>
		</div>
	);
};

export default App;
