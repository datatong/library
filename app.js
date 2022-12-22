//DOM selectors
let newBookBtn = document.getElementById("new-book-button");
let formContainer = document.getElementById("form-container");
let submitBtn = document.getElementById("submit-button");
let bookContainer = document.getElementById("book-container");

//create DOM elements
//book card
const newCard = document.createElement("span");
newCard.id = 'card';
const cardTitle = document.createTextNode(title);
const cardAuthor = document.createTextNode(author);
const cardPages = document.createTextNode(pages);

//read checkbox
const readBox = document.createElement("input");
const readBoxLabel = document.createElement("label");
readBox.id = 'read-checkbox';
readBox.type = 'checkbox';
readBox.name = 'read-checkbox';
readBoxLabel.setAttribute("for", "read-checkbox");
const readLabelText = document.createTextNode("Have read:");

//delete button
const deleteBtn = document.createElement("button");
deleteBtn.id = 'delete-button';
const deleteContent = document.createTextNode("Delete");

//event listeners
newBookBtn.addEventListener("click", showForm);
submitBtn.addEventListener("click", () => {
    formContainer.style.display = 'block';

    //prevent sending input to server
    (e) => {
        e.preventDefault();
    }
});


let myLibrary = [];
//object constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        return Book;
    }
}

//create objects
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read')

//functions
function showForm() {
    const formShown = formContainer;
        formShown.style.display = 'block';
    const hideNewBook = newBookBtn;
        hideNewBook.style.display = 'none';
}

//function to validate input
//fuction to display input as the object properties

function addBookToLibrary() {
    myLibrary.forEach();
    //create card and append info
    //append card
}