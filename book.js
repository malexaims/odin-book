class Book {
    constructor(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;        
    }
}

let myLibrary = [];

const theHobbit = new Book("The Hobbit", "Tolkien",  295, true);
const theGrinch = new Book("The Grinch", "Unknown",  295, true);
const theDragon = new Book("The Dragon Face", "Tolkien",  295, true);

myLibrary.push(theHobbit);
myLibrary.push(theGrinch);
myLibrary.push(theDragon);

window.onload = displayBooks();
  
function displayBooks() {
    const bookList = document.getElementById("book-list");
    //Clear the existing bookList to prevent duplication.
    bookList.replaceChildren();
    let currIndex = 0;

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
        bookCard.appendChild(status);

        const remove = document.createElement('button');
        remove.id = "remove-btn";
        remove.textContent = "Delete";
        bookCard.appendChild(remove);
        remove.addEventListener('click', () => {
            const parent = remove.parentElement;
            const index = parent.dataset.index;
            const bookToRemove = document.querySelector(`[data-index="${index}"`);
            bookToRemove.remove();
            myLibrary.splice(index,index);
        });

        const read = document.createElement('button');
        read.textContent = "Read / Unread";
        bookCard.appendChild(read);
        read.addEventListener('click', () => {
            let currStat = status.textContent;
            status.textContent = (currStat == "Read") ? "Not Read" : "Read";
        });
        

        bookCard.setAttribute("data-index", currIndex);

        bookList.appendChild(bookCard);
        ++currIndex;
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
    const isRead = document.getElementById("isRead").checked;

    const newBook = new Book(title, author, parseInt(pages), isRead);
    myLibrary.push(newBook);
    
    displayBooks();

    toggleForm(false);
    document.getElementById("book-form").reset(); 
})

// document.getElementById("remove-btn").addEventListener('click', () => {
//     console.log("test");
//     // const parent = button.parentElement;
//     // const index = parent.dataset.index;
//     // const bookToRemove = document.querySelector(`[data-index="${index}"`);
//     // bookToRemove.remove();
// });


