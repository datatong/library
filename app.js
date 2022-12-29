////DOM SELECTORS////
let newBookBtn = document.getElementById("new-book-button");
let formContainer = document.getElementById("form-container");
let submitBtn = document.getElementById("submit-button");
let bookContainer = document.getElementById("book-container");

////CREATE DOM ELEMENTS////
//book card
const newCard = document.createElement("span");
newCard.id = 'card';
const cardTitle = document.createTextNode(title);
const cardAuthor = document.createTextNode(author);
const cardPages = document.createTextNode(pages);

//read checkbox
const readBoxContainer = document.createElement("div");
readBoxContainer.id = 'read-box-container';
readBoxContainer.className = 'read-box-container';

const readBox = document.createElement("input");
readBox.id = 'read-checkbox';
readBox.type = 'checkbox';
readBox.name = 'read-checkbox';

const readBoxLabel = document.createElement("label");
readBoxLabel.setAttribute("for", "read-checkbox");
const readBoxLabelText = document.createTextNode("Have read: ");
readBoxLabel.appendChild(readBoxLabelText);
readBoxContainer.appendChild(readBoxLabel);
readBoxContainer.appendChild(readBox);

//delete button
const deleteBtn = document.createElement("button");
deleteBtn.id = 'delete-button';
const deleteContent = document.createTextNode("Delete");
deleteBtn.appendChild(deleteContent);

////EVENT LISTENERS////
newBookBtn.addEventListener("click", showForm);
submitBtn.addEventListener("click", () => {
    formContainer.style.display = 'block';

    //prevent sending input to server
    (e) => {
        e.preventDefault();
    }
});

////array////
let myLibrary = [];
////object constructor////
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        return Book;
    }
}

////create object example////
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read')

////FUNCTIONS////
function showForm() {
    const formShown = formContainer;
        formShown.style.display = 'block';
    const hideNewBook = newBookBtn;
        hideNewBook.style.display = 'none';
}

//function to validate input!!!
//function to translate form field inputs as the object properties!!!
//push object into array!!!
myLibrary.push(theHobbit);

function addBookToLibrary() {
    myLibrary.forEach(displayCard);
    //create card and append info into card for each object in array
    function displayCard() {
        bookContainer.appendChild(newCard); //append card into container
        newCard.appendChild(cardTitle);
        newCard.appendChild(cardAuthor);
        newCard.appendChild(cardPages);
        newCard.appendChild(readBoxContainer);
        newCard.appendChild(deleteBtn);
        console.log(Book);
    }
}

addBookToLibrary();

//show object properties as HTML text elements!!!