// Step 1: Basic CRUD Operations:


// Find all science fiction books 
db.books.find({ genre: "Fiction" });

// Find books published after year 2010
db.books.find({ published_year: { $gt: 2010 } });

// Find books by a specific author
db.books.find({ author: "Adriano Cabral" });

// Update the price of a specific book
db.books.updateOne({ title: "Pride and Prejudice" }, { $set: { price: 23.99 } });

// Delete a book by its title
db.books.deleteOne({ title: "Adriano Cabral's Biography" });


// Advanced Queries



// Books that are in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });

// Projection: show only title, author, price
db.books.find({}, { _id: 0, title: 1, author: 1, price: 1 });

// Sort by price ascending
db.books.find().sort({ price: 1 });

// Sort by price descending
db.books.find().sort({ price: -1 });

// Pagination: limit and skip (5 books per page)
db.books.find().skip(0).limit(5);  // Page 1
db.books.find().skip(5).limit(5);  // Page 2



// Aggregation Pipelines


// Average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
]);

// Author with the most books
db.books.aggregate([
  { $group: { _id: "$author", totalBooks: { $sum: 1 } } },
  { $sort: { totalBooks: -1 } },
  { $limit: 1 }
]);

// Group books by publication decade
db.books.aggregate([
  {
    $group: {
      _id: {
        $concat: [
          { $substr: [{ $subtract: ["$published_year", { $mod: ["$published_year", 10] }] }, 0, -1] },
          "s"
        ]
      },
      count: { $sum: 1 }
    }
  }
]);




 // Indexing


// Create index on title
db.books.createIndex({ title: 1 });

// Compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 });

// Using explain() method to check performance
db.books.find({ title: "The Lord of the Rings" }).explain("executionStats");