class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity
        this.books = []
    }
    addBook(bookName, bookAuthor) {
        if (this.capacity === this.books.length) {
            throw Error('Not enough space in the collection.')
        }
        this.books.push({ bookName, bookAuthor, paid: false })
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook(bookName) {
        for (let book of this.books) {
            if (book.bookName === bookName) {
                if (book.paid) {
                    throw Error(`${bookName} has already been paid.`)
                } else {
                    book.paid = true
                    return `${bookName} has been successfully paid.`
                }
            }
        }
        // if exits loop => not found
        throw Error(`${bookName} is not in the collection.`)
    }

    removeBook(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            let book = this.books[i]
            if (book.bookName === bookName) {
                if (!book.paid) {
                    throw Error(`${bookName} need to be paid before removing from the collection.`)
                } else {
                    this.books.splice(i, 1)
                    return `${bookName} remove from the collection.`
                }
            }
        }
        // if exits loop => not found
        throw Error("The book, you're looking for, is not found.")
    }

    getStatistics(bookAuthor) {
        if (bookAuthor === undefined) {
            let result = `The book collection has ${this.capacity - this.books.length} empty spots left.`
            let sortedBooks = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName))
            for (let book of sortedBooks) {
                result += `\n${book.bookName} == ${book.bookAuthor} - ${book.paid ? 'Has Paid' : 'Not Paid'}.`
            }
            return result
        }
        // if bookAutor param is provided
        let result = []
        for (let book of this.books) {
            if (book.bookAuthor === bookAuthor) {
                result.push(`${book.bookName} == ${book.bookAuthor} - ${book.paid ? 'Has Paid' : 'Not Paid'}.`)
            }
            return result.join('n')
        }
        // if exits loop => not found
        throw Error(`${bookAuthor} is not in the collection.`)
    }
}