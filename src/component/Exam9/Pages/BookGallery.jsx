import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function BookGallery() {
    const [allBooks, setAllBooks] = useState([]);

    useEffect(()=>{
        const getAllBooks = async () => {
            try{
                const resp = await axios.get('https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books');
                console.log(resp);
                if(resp.status === 200){
                    setAllBooks(resp.data);
                }
            }catch(error){
                console.error(error);
            }
        }
        getAllBooks();
        console.log(allBooks);
    },[]);
  return (
    <div className='book-gallery'>
      {allBooks && allBooks.map((book, index) =>{
        const index2= book.id;
        return (<Link key={index} to={`/exam9/book/${book.id}`}>
          <h2>{book.title}</h2>
          <img src={book.image} alt={book.title} />
        </Link>)
})}
    </div>
  )
}
