class Book {
    constructor(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;        
    }
}

const myLibrary = [];

const theHobbit = new Book("The Hobbit", "Tolkien",  295, true);
const theGrinch = new Book("The Grinch", "Unknown",  295, true);
const theDragon = new Book("The Dragon Face", "Tolkien",  295, true);

myLibrary.push(theHobbit);
myLibrary.push(theGrinch);
myLibrary.push(theDragon);
  
function displayBooks() {
    const bookList = document.getElementById("book-list");
    
    myLibrary.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        const title = document.createElement('h2');
        title.textContent = book.title
        bookCard.appendChild(title);

        const author = document.createElement('p');
        author.textContent = `Author: ${book.author}`;
        bookCard.appendChild(author);


        const pages = document.createElement('p');
        pages.textContent = `Pages: ${book.pages}`;
        bookCard.appendChild(pages);


        const status = document.createElement('p');
        status.textContent = book.read ? "Read" : "Not Read";
        status.classList.add("status", book.read ? "read" : "not-read");
        bookCard.appendChild(author);

        bookList.appendChild(bookCard)
    });
}

function toggleForm(show){
    const formContainer = document.getElementById("book-form-container");
    if (show){
        formContainer.classList.add("show");
        formContainer.classList.remove("hidden");
    }
    else {
        formContainer.classList.add("hidden");
        formContainer.classList.remove("show");
    }
}

document.getElementById("new-book-btn").addEventListener('click', () => {
    console.log("BUTTON CLICKED");
    toggleForm(true);
});

document.getElementById('cancel-btn').addEventListener('click', () => {
    toggleForm(false);
})

document.getElementById("book-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const isRead = document.getElementById("isRead").value;

    const newBook = new Book(title, author, parseInt(pages), isRead);
    myLibrary.push(newBook);
    
    displayBooks();

    toggleForm(false);
    document.getElementById("book-form").reset(); 
})  


window.onload = displayBooks();



