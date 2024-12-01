import React from 'react';
import { Container } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BookBar from '../components/BookBar';
import BookList from '../components/BookList';
const Library = () => {
    
    return (
        <Container> 
            <div className="container" >
                <div className="main "
                //  style={{backgroundColor: 'rgb(216, 221, 207)'}} возможно потом начну сюда писать код 
                >
                    <TypeBar/>
                    <BookList />
                </div>  
            </div>    
        </Container>
    );
};

export default Library;