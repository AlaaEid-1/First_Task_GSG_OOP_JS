function createBook(title, author, isRead=false) {
    const book ={}
    book.title = title;
    book.author = author;
    book.isRead = isRead;
  
    book.toggleReadStatus = function() {
        this.isRead = !this.isRead;}
  
     book.describe = function() {
        return `${this.title} by ${this.author} [${this.isRead ? "Read" : "Unread"}]`;}
        return book;
  }
  
  const book1 = createBook("Automate the Boring Stuff with Python", "Al Sweigart");
  book1.toggleReadStatus();
  console.log(book1.describe());