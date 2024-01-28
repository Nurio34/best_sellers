
function Book({book,buyBookFn,number}) {

    const {img,title,author,price,id,sold,rated,rate} = book

    const buyBook = () => {
        const soldBook = book
        const soldBookId = id
        soldBook.sold++
        buyBookFn(soldBook,id)
    }

    return (
        <div className=" grid justify-items-center border-[1px] border-black p-4 relative rounded-lg">
            <img src={img} alt={title} />
            <h3 className=" line-clamp-2 text-center font-bold">{title}</h3>
            <h4 className=" line-clamp-1 text-center italic">{author}</h4>
            <h5 className=" font-bold">${price}</h5>
            <button className="border-[1px] border-black px-2 bg-blue-700 text-white rounded-md active:scale-95" 
                onClick={buyBook}
            >Buy</button>
            <p className=" absolute left-0 bg-orange-500 text-white pl-1 pr-2 round rounded-tl-lg rounded-br-lg">#{number+1}</p>
        </div>
  )
}

export default Book