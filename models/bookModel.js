import mongoose from "mongoose"

const bookSchema = mongoose.Schema({
    "name": String,
    "desc": String,
    "price": Number,
    "genre": String,
    "category": String,
    "image": String,
})

const Book = mongoose.model("Book", bookSchema);
export default Book;