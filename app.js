//document selector
let newBookBtn = document.getElementById("new-book-button");
let formContainer = document.getElementById("form-container");
let submitBtn = document.getElementById("submit-button");

//event listeners
newBookBtn.addEventListener("click", showForm);
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
});

//functionality
let myLibrary = ["The Hobbit", "Harry Potter", "Animorphs", "Game of Thrones"];

function Book() {
    //the constructor...
}

function addBookToLibrary() {
    //ask for book and add it to array
    //must allow for multiple input or stopping point
    //be able to read invalid input and ask again
    let inputBook = prompt("Enter book");
    myLibrary.push(inputBook);
}

function displayBooks() {
    //loop through array
    myLibrary.forEach(display);
    //displays each book
    function display(title) {
        console.log(title);
        //create HTML element from array
        let newCard = document.createElement("span");
        let cardContent = document.createTextNode(title);
        newCard.appendChild(cardContent);
        //add the created element into the DOM
        let bookContainer = document.getElementById("book-container");
        bookContainer.appendChild(newCard);
    }
}

function showForm() {
    const formShown = formContainer;
        formShown.style.display = 'block';
    const hideNewBook = newBookBtn;
        hideNewBook.style.display = 'none';
}

addBookToLibrary();
displayBooks();
