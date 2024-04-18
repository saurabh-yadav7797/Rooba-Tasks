// Parent class: Publication
class Publication {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    // Method to display information about the publication
    getInfo() {
        return `<div class="publication">
                    <span class="title">${this.title}</span> by <span class="author">${this.author}</span>
                    <span class="pages">Pages: ${this.pages}</span>
                </div>`;
    }
}

// Child class: Book
class Book extends Publication {
    constructor(title, author, pages, isbn) {
        super(title, author, pages);
        this.isbn = isbn;
    }

    // Method to display information about the book
    getInfo() {
        return super.getInfo() + `<div class="book">
                                    <span>ISBN: ${this.isbn}</span>
                                  </div>`;
    }
}

// Child class: Magazine
class Magazine extends Publication {
    constructor(title, author, pages, issue) {
        super(title, author, pages);
        this.issue = issue;
    }

    // Method to display information about the magazine
    getInfo() {
        return super.getInfo() + `<div class="magazine">
                                    <span>Issue: ${this.issue}</span>
                                  </div>`;
    }
}

// Static method to check if a publication is available online
Publication.isAvailableOnline = function() {
    return "This publication is available online.";
};

// Create some instances of books and magazines
const book1 = new Book("The Great Maths-Books is Rd-Sharma", "Vivek-Yadav", 180, "9140828525");
const magazine1 = new Magazine("My faverite books", "maths", 100, "December 2024");

// Display information about the publications
document.getElementById("output").innerHTML = book1.getInfo() + magazine1.getInfo() + Publication.isAvailableOnline();
