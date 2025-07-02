class BookClass {
    constructor(title, author, isRead=false) {
      this.title = title;
      this.author = author;
      this.isRead = isRead;
    }
    toggleReadStatus() {
      this.isRead = !this.isRead;
    }
    describe() {
      return `${this.title} by ${this.author} [${this.isRead ? "Read" : "Unread"}]`;
    }
  }
  
  const book = new BookClass("Automate the Boring Stuff with Python", "Al Sweigart");
  book.toggleReadStatus();
  console.log(book.describe());