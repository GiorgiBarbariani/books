import React from 'react';
import "./styles.css";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";


const Description = () => {

    const location = useLocation();
    const books  = location.state.book;
    const clickedd = location.state.clicked;


  return (
    <>
 <Link to="/" className="booklist"> Back </Link>
        {books.filter((item: any) => item.id === "553380168").map((item: any, i: any) => (
        <div key={i}>
        <img  src= {item.coverImageUrl} />
        {item.title}
        {item.synopsis}
        </div>
     ))}
    </>
  )
}

export default Description;