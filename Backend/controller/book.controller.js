import modelinstacne from "../model/book.model.js";
// import Book from "../model/book.model.js";

// here getBook is  a functin  that  we directly  export it to the book.router.js
export const getBook = async (req, res) => {
  try {
	// const book = await Book.find();
	const book = await modelinstacne.find();
	res.status(200).json(book);
  } catch (error) {
	res.json({ message: error.message });
	res.status(500).json({ error });
  }
};