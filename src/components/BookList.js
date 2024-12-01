import React, { useContext, useEffect,useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import BookItem from './BookItem';
import Pages from './Pages';

const BookList = observer(() => {
    const { book } = useContext(Context);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const { selectedType } = book; 


    const filterBooksByJanre = () => {
        if (book.selectedType && book.selectedType.name) {
            const filtered = book.book.filter(book => book.janre.id === selectedType?.id );
            setFilteredBooks(filtered);
        } else {
            setFilteredBooks(book.book);
        }
         
    };
    useEffect(() => {
        filterBooksByJanre();
    }, [book.selectedType]); 


    return (
        <div className="main-content">
            <h3>Книги</h3>
            {filteredBooks.map(book =>
                <BookItem key={book.id} book={book} />
            )}
            {/* <Pages/> */}
        </div>
    );
});

export default BookList;
