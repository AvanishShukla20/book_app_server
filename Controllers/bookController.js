import Books from "../models/bookModel.js";

const getBook = async(req, res) => {
    try {

        const books = await Books.find();
        res.status(200).json(books);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};

export default getBook;