function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.sayTitle = function() {
        console.log(title)
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read')

theHobbit.info()
console.log(theHobbit.info());
