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
submitBtn.addEventListener("click", () => {
    //check for inputs and submit inputs
    //submitted inputs into a new object to be displayed
    //WORK HERE
    
    formContainer.style.display = 'block';
    //prevent sending input to server
    (e) => {
        e.preventDefault();
    }
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

/*test:
//theHobbit.sayTitle();
//let theHob = JSON.stringify(theHobbit);
*/

//display object info as HTML (innerHTML?)
document.getElementById(newCard).innerHTML = Book;
myLibrary.push(theHobbit);

/*
function addBookToLibrary() {
    let inputBook = prompt("Enter book");
    myLibrary.push(inputBook);
}
addBookToLibrary();
*/

//WORK IN PROGRESS HERE
function displayBooks() {
    //loop through array
    myLibrary.forEach(display);
    //displays each book
    function display(title) {
        console.log(title); //showing objects in console

        //create HTML element for cards from array
        let newCard = document.createElement("span");
        newCard.id = 'card';
        let cardContent = document.createTextNode(title);
        newCard.appendChild(cardContent);

        //add the other info (author, pages)
        let authorInfo = document.createTextNode(author);
        newCard.appendChild(authorInfo);
        let pagesInfo = document.createTextNode(pages);
        newCard.appendChild(pagesInfo);

        //create checkbox for read

        //add the created card into the DOM
        bookContainer.appendChild(newCard);

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