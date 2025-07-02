class Book extends LibraryItem {
    #author;
    #pageNumber;
    #isRead;

    constructor(title,itemNumber,author,pageNumber, isRead=true) {
      super(title, itemNumber);
      this.#pageNumber = pageNumber;
      this.#author = author;
      this.#isRead = isRead;
    }
    getAuthor() {
        return this.#author;
      }
    getPageCount() {
        return this.#pageNumber;
      }
    BookInformation() {
      console.log(`${this.getTitle()} by ${this.#author} Is ${this.#pageNumber} Is ${this.#isRead ? "Read" : "Unread"}`);
    }
  }  
  
  const myBook = new Book("Eloquent JavaScript" ,1,"Marijn Haverbeke",300);
  myBook.BookInformation();   
  myBook.isBorrowedBook();                  
  Book.showTotalItems();      
  
  