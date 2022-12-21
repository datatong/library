//document selector
let newBookBtn = document.getElementById("new-book-button");
let formContainer = document.getElementById("form-container");
let submitBtn = document.getElementById("submit-button");
let bookContainer = document.getElementById("book-container");

//create DOM elements
let deleteBtn = document.createElement("button");
deleteBtn.id = 'delete-button';
let deleteContent = document.createTextNode("Delete");

let newCard = document.createElement("span");
newCard.id = 'card';
let cardContent = document.createTextNode(title);

//event listeners
newBookBtn.addEventListener("click", showForm);
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
});

//array
let myLibrary = ['Harry Potter'];

//constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.sayTitle = function() {
        console.log(title)
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read');
//console.log(theHobbit);
//let theHob = JSON.stringify(theHobbit);
myLibrary.push(theHobbit);

/*
function addBookToLibrary() {
    let inputBook = prompt("Enter book");
    myLibrary.push(inputBook);
}
addBookToLibrary();
*/

function displayBooks() {
    //loop through array
    myLibrary.forEach(display);
    //displays each book
    function display(title) {
        console.log(title); //showing objects in console

        //create HTML element for title cards from array
        let newCard = document.createElement("span");
        newCard.id = 'card';
        let cardContent = document.createTextNode(title);
        newCard.appendChild(cardContent);
        //add the created element into the DOM
        bookContainer.appendChild(newCard);

        //add the rest of the info (author, pages, read)

        //create delete button and add to each card
        let deleteBtn = document.createElement("button");
        deleteBtn.id = 'delete-button';
        let deleteContent = document.createTextNode("Delete");
        deleteBtn.appendChild(deleteContent);
        newCard.appendChild(deleteBtn);
    }
}
displayBooks();

function showForm() {
    const formShown = formContainer;
        formShown.style.display = 'block';
    const hideNewBook = newBookBtn;
        hideNewBook.style.display = 'none';
}

//add form functionality

//display object info as HTML (innerHTML?)
