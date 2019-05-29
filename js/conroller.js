'use strict'
function onInit(){
    gBooks = createBooks()
    renderBooks()
    onSetLang('en')
    
}

function onDeleteBook(bookId){
   
    console.log(bookId)
    deleteBook(bookId)
    renderBooks()
}
function onAddAndRead_NewBook(){
    var name = prompt('Enter the name of the book')
    var price = +prompt('Enter the price of the book')
    addBook(name,price)
    renderBooks()
    
}
function onReadAnd_UpdateBook(bookId){
   var newPrice = +prompt('Update the new price')
   updateBook(bookId, newPrice)
   console.log('gBooks',gBooks)
   renderBooks()
  
}
//render the book button
function onReadBtn(bookId){
    var currBook = getBookById(bookId) 
    $(".modal-header").html(` ${currBook.name} <br>Price: ${currBook.price}$`)
    console.log('currBook.img',currBook.img)
    $(".modal-body").html(`<img src="${currBook.img}">`)
    

}
function renderBooks(){
   
var strHtml = gBooks.map(function(book){
    
    return ` 
    <tr class=book>
    <th scope="row"></th>
    <td>${book.name}</td>
    <td>${book.price}</td>
    <td><img src="${book.img}" class="rounded float-left"></td>
    <td><button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#exampleModal" onclick="onReadBtn('${book.id}')">
    Read
</button><button type="button" class="btn btn-outline-success" onclick="onReadAnd_UpdateBook('${book.id}')">Update</button><button type="button" class="btn btn-outline-danger" onclick="onDeleteBook('${book.id}')">Delete</button></td>

    </tr>
`
}) 
$('tbody').html(strHtml)

}

function onSetLang(lang) {
    setLang(lang);
    if (lang === 'he') document.body.classList.add('rtl');
    else document.body.classList.remove('rtl');
    doTrans();
}
var gCount = 0
function increaseRate(){
    if(gCount<10){
        var elCount = document.querySelector('.count')
        elCount.innerText = ++gCount

    }
}
function decreaseRate(){
    console.log('in')
    if(gCount>0){
        var elCount = document.querySelector('.count')
        elCount.innerText = --gCount

    }
    
}
