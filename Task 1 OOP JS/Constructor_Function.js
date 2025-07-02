function CreatBookConstructor(title, author, isRead=false) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
  
    this.toggleReadStatus = function() {
      this.isRead = !this.isRead;
    };
  
    this.describe = function() {
      return `${this.title} by ${this.author} [${this.isRead ? "Read" : "Unread"}]`;
    };
  }
  
  const book1 = new CreatBookConstructor("Automate the Boring Stuff with Python", "Al Sweigart");
  book1.toggleReadStatus();
  console.log(book1.describe());