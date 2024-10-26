const getReadBooks = () =>{
    const storedReadBook = localStorage.getItem('read-books');
     if(storedReadBook){
        return JSON.parse(storedReadBook);
     }
     return [];
}


const saveReadBooks = bookid => {
 const storedReadBooks = getReadBooks();
 const exists = storedReadBooks.find(bookId => bookId === bookid);
 if(!exists){
    storedReadBooks.push(bookid);
    localStorage.setItem('read-books', JSON.stringify(storedReadBooks))
 }

}

const getWhishBooks = () =>{
    const storedWhishBook = localStorage.getItem('whish-books');
    if(storedWhishBook){
        return JSON.parse(storedWhishBook)
    }
    return [];
}

const saveWishBooks = bookid => {
    const storedWhishBooks = getWhishBooks();
    const exists = storedWhishBooks.find(bookId => bookId === bookid);
    if(!exists){
        storedWhishBooks.push(bookid);
        localStorage.setItem('whish-books', JSON.stringify(storedWhishBooks))
    }
}

export {getReadBooks, saveReadBooks, getWhishBooks, saveWishBooks}