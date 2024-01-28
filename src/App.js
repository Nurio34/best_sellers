import "./App.css"
import { useState } from "react";
import {bookss} from "./books"
import Booklist from "./Components/Booklist";
import AddBook from "./Components/AddBook";

function App() {

  const [books,setBooks] = useState(()=>{
    return JSON.parse(localStorage.getItem("bookList")).sort((a,b)=> b.sold - a.sold) || bookss.sort((a,b)=> b.sold - a.sold)
  })
  
  const addBookFn = async (book) => {
    const totalBooks = books.length
    book.id = totalBooks + 1
    await setBooks([...books,book])
    localStorage.setItem("bookList", JSON.stringify([...books,book]))
  }

  const buyBookFn = async (book,id) => {
    const filteredBooks = books.filter(book => book.id != id)
    const newBooks = [...filteredBooks,book].sort((a,b)=> b.sold - a.sold)
    await setBooks(newBooks)
    localStorage.setItem("bookList", JSON.stringify(newBooks))
  }

  return( 
    <div className=" grid justify-items-center">
      <AddBook addBookFn={addBookFn} />
      <Booklist books={books} buyBookFn={buyBookFn}/>
    </div>
  )
}

export default App;
