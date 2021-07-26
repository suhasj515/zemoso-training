import React,{useState} from 'react'

function ObjectUseState(){
    let [book,setBook]= useState({bookName:"", author:""})
    return(
        <div>
            
                <input type="text" value={book.bookName} onChange={e=> setBook({bookName: e.target.value})} />
                <input type="text" value={book.author} onChange={e=> setBook({author: e.target.value})} /> 
                <h2> The author for the book {book.bookName} is {book.author} (using objects as argument for usestate)</h2>
           

        </div>
    )
}

export default ObjectUseState