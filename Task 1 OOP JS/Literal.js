const bookLiteral = {
  title: "Automate the Boring Stuff with Python",
  author: "Al Sweigart",
  isRead: false,
 
  toggleReadStatus() {
    this.isRead = !this.isRead;
  },

  describe() {
    return `${this.title} by ${this.author} [${this.isRead ? "Read":"Unread"}]`;
  }
};
bookLiteral.toggleReadStatus();
console.log(bookLiteral.describe());
