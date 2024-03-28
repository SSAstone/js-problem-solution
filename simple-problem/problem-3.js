function paperRequirements(book1, book2, book3) {
    const book1Page = book1 * 100;
    const book2Page = book2 * 200;
    const book3Page = book3 * 300;
    return book1Page + book2Page + book3Page;
}
const books = paperRequirements(4, 2, 2);
console.log(books); 