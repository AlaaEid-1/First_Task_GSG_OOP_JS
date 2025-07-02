class LibraryItem {
    #title;
    #itemNumber;
    #isborrowed;
    static totalItemsCount = 0;

    constructor(title, itemNumber ,isborrowed = true) {
      this.#title = title;
      this.#itemNumber = itemNumber;
      this.#isborrowed = isborrowed;
      LibraryItem.totalItemsCount++;
    }
  
    getTitle() {
      return this.#title;
    }
  
    getItemNumber() {
      return this.#itemNumber;
    }

    isBorrowedBook() {
        console.log (`${this.getTitle()} Is [${this.#isborrowed ? "yes borrowed" : " Not borrowed"}]`);
    }
  
    static showTotalItems() {
      console.log(`Total items in library: ${LibraryItem.totalItemsCount}`);
    }
  }