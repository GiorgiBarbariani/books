import axios from 'axios';
import React, {useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";


const BookList = () => {

    const [book, setBook] = useState([]);    
    const navigate = useNavigate();


    useEffect(() => {
        axios.get("http://104.248.26.141:3000/api/books")
        .then(response => setBook(response.data.books))
    }, [])

    

  return (
    <>
     {book.map((item: any, i: any) => (
       
        <Link to="/description" className="booklist" state={{book}}  id={item.id} key={item.id}>
        <div key={i} >
        <img  src= {item.coverImageUrl} />
        {item.title}
        {item.synopsis}
        </div>
        </Link>
     ))}
    </>
  )
}

export default BookList