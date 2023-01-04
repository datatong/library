////object constructor function////
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    /*
    this.info = function () {
        return Book;
    }
    */
}

Book.prototype.info = function () {
    return Book;
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
//CREATE ELEMENT DURING BOOK OBJECT CREATION!!
submitBtn.addEventListener("click", () => { 
    //create object, submit form, add cards for each object of array   
    submitForm.onsubmit = (e) => {
        e.preventDefault();
        //create new object
        newBook = new Book(title, author, pages, read);

        //object properties = form entries
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

////FUNCTIONS////
function createCard() {
    //create card elements
    let card = document.createElement("span");
    let cardInfoContainer = document.createElement("div");
    cardInfoContainer.className = "card-info-container";

    let cardInfoTitle = document.createElement("div");
    let cardInfoAuthor = document.createElement("div");
    let cardInfoPages = document.createElement("div");

    let cardSecondContainer = document.createElement("div");
    cardSecondContainer.className = "card-second-container";

    const cardTitle = document.createTextNode("Title: " + title);
    const cardAuthor = document.createTextNode("Author: " + author);
    const cardPages = document.createTextNode("Pages: " + pages);

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
    card.appendChild(cardSecondContainer);

    cardInfoContainer.appendChild(cardInfoTitle);
    cardInfoContainer.appendChild(cardInfoAuthor);
    cardInfoContainer.appendChild(cardInfoPages);
    cardInfoTitle.appendChild(cardTitle);
    cardInfoAuthor.appendChild(cardAuthor);
    cardInfoPages.appendChild(cardPages);

    cardSecondContainer.appendChild(readCheckBox);
    cardSecondContainer.appendChild(checkBoxLabel);
    cardSecondContainer.appendChild(checkBoxLabelTxt);
    
    card.appendChild(deleteBtn);
    deleteBtn.appendChild(deleteTxt);

    //append card to container
    bookContainer.appendChild(card);
    
    //add eventlistener after element is created
    function createEventListener() {
        if (deleteBtn) {
            deleteBtn.addEventListener('click', function() {
                //console.log('success');
                card.remove();
            });
        }
    }
    createEventListener();
}

//append card to bookcontainer
function addBookToLibrary() {
    //starts at newest pushed object (prevents appending previously appended cards)
    myLibrary.slice((myLibrary.length)-1).forEach(() => {
        createCard();
    });
}

//Check box to toggle read status (Do I utitlize prototype property?)!!