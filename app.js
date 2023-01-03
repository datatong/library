
////object constructor////
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    //this.info = function () {
    //    return Book;
    //}
}

////test create object example////
//const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read');
//const harryPotter = new Book('Harry Potter', 'JK Rowling', '900 pages', 'not read');

////array////
let myLibrary = [];

////DOM SELECTORS////
let newBookBtn = document.getElementById("new-book-button");
let formContainer = document.getElementById("form-container");
let submitBtn = document.getElementById("submit-button");
let bookContainer = document.getElementById("book-container");
let submitForm = document.querySelector("form");

////CREATE DOM ELEMENTS////
//book card
const card = document.createElement("span");
card.id = 'card';
card.className = 'card';
const cardInfoContainer = document.createElement("div");
cardInfoContainer.id = 'card-info-container';
cardInfoContainer.className = 'card-info-container';

const cardTitle = document.createTextNode(title);
const cardAuthor = document.createTextNode(author);
const cardPages = document.createTextNode(pages);

//read checkbox
/*
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
*/

//delete button

const deleteBtn = document.createElement("button");
deleteBtn.id = 'delete-button';
const deleteContent = document.createTextNode("Delete");
deleteBtn.appendChild(deleteContent);


////EVENT LISTENERS////
newBookBtn.addEventListener("click", showForm);

submitBtn.addEventListener("click", () => {
    formContainer.style.display = 'block';
    //submit form field inputs as the object properties
    submitForm.onsubmit = (e) => {
        e.preventDefault();
        title = document.getElementById("title").value;
        author = document.getElementById("author").value;
        pages = document.getElementById("pages").value;
        read = document.getElementById("read").value;

        newBook = new Book(title, author, pages, read);
        //!!!CREATE ELEMENT DURING BOOK OBJECT CREATION!!!

        console.log(newBook);
        console.log(myLibrary);

        myLibrary.push(newBook);
        forEachBook();
    }
});

document.addEventListener("click", deleteNewCard);

function deleteNewCard (e) {
    var deleteTarget = e.target;
    if(deleteTarget.tagName = 'BUTTON') {
        newCard.remove();
    }
}

//!!!delete card event!!!
//!!!function to validate input!!!

//!!!toggle read status event!!!
//!!!prototype for read status for each book!!!
Book.prototype.hasRead = () => {
    //this.read = Boolean(read);
}

////FUNCTIONS////
function showForm() {
    const formShown = formContainer;
        formShown.style.display = 'block';
    const hideNewBook = newBookBtn;
        hideNewBook.style.display = 'none';
}

function addBookToLibrary() { 
    let newCard = document.createElement("span");
    let newCardInfoContainer = document.createElement("div");
    newCardInfoContainer.id = 'card-info-container';
    newCardInfoContainer.className = 'card-info-container';
    bookContainer.appendChild(newCard); //append card into container
    newCard.appendChild(newCardInfoContainer);

    //!!!CREATED NEW ELEMENT EACH TIME IT NEEDS TO BE APPENDED!!!
    //function invocation regarding 'this.'
    const cardTitle = document.createTextNode(title);
    const cardAuthor = document.createTextNode(author);
    const cardPages = document.createTextNode(pages);
    newCardInfoContainer.appendChild(cardTitle);
    newCardInfoContainer.appendChild(cardAuthor);
    newCardInfoContainer.appendChild(cardPages);

    //readbox
    const readBoxContainer = document.createElement("div");
    readBoxContainer.id = 'read-box-container';
    readBoxContainer.className = 'read-box-container';
    
    const readBox = document.createElement("input");
    readBox.type = "checkbox";
    //readBox.setAttribute("type", "checkbox");
    readBox.id = 'read-checkbox';
    readBox.name = 'read-checkbox';
    
    const readBoxLabel = document.createElement("label");
    readBoxLabel.setAttribute("for", "read-checkbox");
    const readBoxLabelText = document.createTextNode("Have read: ");
    readBoxLabel.appendChild(readBoxLabelText);
    readBoxContainer.appendChild(readBoxLabel);
    readBoxContainer.appendChild(readBox);

    //delete
    let newDeleteBtn = document.createElement("button");
    newCard.appendChild(newDeleteBtn);
    const deleteContent = document.createTextNode("Delete");
    newDeleteBtn.appendChild(deleteContent);
}

//for each property of each object in the array
function objectToString() {
    //loop for each key-value pair of each book
    /*
    Book.prototype.toString = function bookToString() {        
        for (const [key, value] of Object.entries(theHobbit)) {
            return `${key}: ${value}`;
        }    
    }
    let bookContent = document.createTextNode(theHobbit.toString());
    */
    const bookContent = document.createTextNode(JSON.stringify(newBook));
    cardInfoContainer.appendChild(bookContent);
}

//loop for each object in the array
function forEachBook() {
    //start at myLibrary[(myLibrary.length) - 1] to prevent looping previous entries again
    myLibrary.slice((myLibrary.length)-1).forEach(() => {
        addBookToLibrary();
        objectToString();
        }
    );
}
