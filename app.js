////object constructor function////
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

//array//
myLibrary = [];

////DOM SELECTOR////
let newBookBtn = document.getElementById("new-book-button");
let formContainer = document.getElementById("form-container");
let submitBtn = document.getElementById("submit-button");
let bookContainer = document.getElementById("book-container");
let submitForm = document.querySelector("form");

////EVENT LISTENER////
///form///
submitBtn.addEventListener("click", () => {    
    //submit form entries
    submitForm.onsubmit = (e) => {
        e.preventDefault();
        //create new object
        newBook = new Book(title, author, pages, read);

        title = document.getElementById("title").value;
        author = document.getElementById("author").value;
        pages = document.getElementById("pages").value;
        read = document.getElementById("read").value;

        myLibrary.push(newBook);
        console.log(newBook);
        console.log(myLibrary);

        //loop through the array
        addBookToLibrary();
    }    
});

///card///
//card delete button

////FUNCTIONS////
//submitForm.onsubmit
//newBook = new Book(title, author, pages, read); //!!CREATE ELEMENT DURING BOOK OBJECT CREATION!!

function createCard() {
    //create card elements
    let card = document.createElement("span");
    let cardInfoContainer = document.createElement("div");
    cardInfoContainer.className = "card-info-container";
    let cardInfo = document.createElement("ul");
    let cardSecondContainer = document.createElement("div");
    cardSecondContainer.className = "card-second-container";

    /*
    const cardTitle = document.createTextNode(title);
    const cardAuthor = document.createTextNode(author);
    const cardPages = document.createTextNode(pages);
    */

    let readCheckBox = document.createElement("input");
    readCheckBox.type = "checkbox";
    readCheckBox.id = "check-box";
    readCheckBox.name = "check-box";
    readCheckBox.value = "read";
    let checkBoxLabel = document.createElement("label");
    checkBoxLabel.setAttribute("for", "check-box");
    const checkBoxLabelTxt = document.createTextNode("Have read")
    let deleteBtn = document.createElement("button");
    const deleteTxt = document.createTextNode("Delete");

    //construct the card layout
    card.appendChild(cardInfoContainer);
    cardInfoContainer.appendChild(cardInfo);
    card.appendChild(cardSecondContainer);

    cardInfoContainer.appendChild(cardTitle);
    cardInfoContainer.appendChild(cardAuthor);
    cardInfoContainer.appendChild(cardPages);

    cardSecondContainer.appendChild(readCheckBox);
    cardSecondContainer.appendChild(checkBoxLabel);
    checkBoxLabel.appendChild(checkBoxLabelTxt);
    cardSecondContainer.appendChild(deleteBtn);
    deleteBtn.appendChild(deleteTxt);

    //append card to container
    bookContainer.appendChild(card);
}

//append card to bookcontainer
function addBookToLibrary() {
    myLibrary.slice((myLibrary.length)-1).forEach(() => {
        createCard();
    });
}

//deleteCard()

//objectToString()
