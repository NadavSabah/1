'use strict'
var gBooks;


function createBook(name, price, imgUrl = "img/4.jpg") {
    return {
        name: name,
        price: price,
        img: imgUrl,
        id: makeId()
    }
}
function addBook(name, price, ) {
    gBooks.push(createBook(name, price))
}
function updateBook(bookId, newPrice) {
    var book = gBooks.find(function (book) {
        return bookId === book.id
    })
    book.price = newPrice
}
function deleteBook(bookId) {
   
    var bookIdx = gBooks.findIndex(function (book) {
        return bookId === book.id
    })
    gBooks.splice(bookIdx, 1)
}
function createBooks() {
    var books = []
    books.push(createBook('Harry Potter', 150, `img/1.jpg`))
    books.push(createBook('Lord of the Ring', 120, `img/2.jpg`))
    books.push(createBook('The Vinci Code', 100, `img/3.jpg`))
    return books
}

function getBookById(bookId){
var book = gBooks.find(function(book){
return book.id === bookId
})

return book
}