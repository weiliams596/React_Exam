import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


export default function Detail() {
    const [book, setBook] = useState({});
    const id=useParams();
    useEffect(()=>{
        const getDetail = async () => {
            try {
                const response = await axios.get(`https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books/${id.id}`);
                setBook(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getDetail();
    },[]);
  return (
    <div>
        <h1>{book.title}</h1>
      <div className="left">
        <img src={book.image} alt="book-img" />
      </div>
      <div className="right">
        <h3>Author:{book.author}</h3>
        <p>{book.description}</p>
      </div>
    </div>
  )
}
