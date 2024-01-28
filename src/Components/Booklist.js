
import Book from "./Book"

function Booklist({books,buyBookFn}) {

    return (
    <div className=" p-4 grid grid-cols-1 gap-4 md:grid-cols-4">
        {books.map((book,index)=>{
            return <Book key={book.id} book={book} buyBookFn={buyBookFn} number={index}/>
        })
        }
    </div>
  )
}

export default Booklist