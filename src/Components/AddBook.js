
function AddBook({addBookFn}) {


    const submitForm = (e) => {
        e.preventDefault()

        const imgInp = document.querySelector("#imgInp")
        const titleInp = document.querySelector("#titleInp")
        const authorInp = document.querySelector("#authorInp")
        const priceInp = document.querySelector("#priceInp")
        
        const book = {
            img : imgInp.value,
            title : titleInp.value,
            author : authorInp.value,
            price : priceInp.value
        }

        if(book.img && book.title && book.author && book.price) addBookFn(book)
    }

  return (
    <form className=" grid gap-2 p-4 w-[50%] min-w-[360px]" onSubmit={submitForm}>
        <label className="grid gap-4 grid-cols-[0.3fr,0.7fr]" htmlFor="imgInp">
            Img Link
            <input className=" border-[1px] border-black" type="text" id="imgInp" />
        </label>
        <label className="grid gap-4 grid-cols-[0.3fr,0.7fr]" htmlFor="titleInp">
            Book Title
            <input className=" border-[1px] border-black" type="text" id="titleInp" />
        </label>
        <label className="grid gap-4 grid-cols-[0.3fr,0.7fr]" htmlFor="authorInp">
            Author
            <input className=" border-[1px] border-black" type="text" id="authorInp" />
        </label>
        <label className="grid gap-4 grid-cols-[0.3fr,0.7fr]" htmlFor="priceInp">
            Price
            <input className=" border-[1px] border-black" type="number" id="priceInp" />
        </label>
        <input className=" justify-self-center border-[1px] bg-green-500 text-white border-black px-2 rounded-lg hover:cursor-pointer active:scale-95" type="submit" value="Submit" />
    </form>
    
  )
}

export default AddBook