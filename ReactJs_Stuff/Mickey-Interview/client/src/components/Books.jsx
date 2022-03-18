import React, { useState } from "react";
import axios from 'axios'


const SearchBooks = () => {
    const [book, setBook] = useState({ items: [] })
    const [ISPN, setISPN] = useState("")
    let URL = `https://www.googleapis.com/books/v1/volumes`

    const fetchBooks = async () => {
        const response = await axios.get(`${URL}?q=${ISPN}`);
        setBook(response.data)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        fetchBooks();
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>Search for book:</label>
                <input onChange={e => setISPN(e.target.value)} type="search" value={ISPN}></input>
                <button>Search</button>
            </form>
            <ul>
                {
                    book.items.map((book, index) => {
                        return (
                            <li key={index}>
                                <div>
                                    <img alt={`${book.volumeInfo.title} book`} src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} />
                                    <div>
                                        <h3>{book.volumeInfo.title}</h3>
                                        <p>{book.volumeInfo.authors}</p>
                                    </div>
                                </div>
                                <hr />
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )


}
export default SearchBooks;