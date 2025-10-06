# MongoDB Data Seeder

This project contains a simple script (`seed.js` / `insert_books.js`) to
populate a MongoDB database with sample data.

------------------------------------------------------------------------

## 📌 Prerequisites

-   [Node.js](https://nodejs.org/) installed (v16 or higher
    recommended).

-   [MongoDB](https://www.mongodb.com/) running locally **or** a MongoDB
    Atlas cluster.

-   Install dependencies:

    ``` bash
    npm install
    ```

------------------------------------------------------------------------

##  Environment Setup

1.  Create a `.env` file in the root of your project.

2.  Add your MongoDB connection string:

    ``` env
    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDatabase
    ```

    > Replace `<username>`, `<password>`, and `myDatabase` with your
    > actual details (plp_bookstore).

------------------------------------------------------------------------

## 🚀 Running the Seeder Script

To run the script and populate the database:

``` bash
node seed.js
```

and then run another script (example `insert_books.js`):

``` bash
node insert_books.js
```

------------------------------------------------------------------------

##  Verifying the Data

Open **MongoDB Compass** or connect via the shell:

``` bash
mongosh
use myDatabase
db.users.find()
db.tasks.find()
db.books.find()
```

------------------------------------------------------------------------

## 📂 Project Structure

    Week 1/
    │── Models/
    │   ├── User.js
    │   └── Task.js
    │── db.js
    │── seed.js
    │── insert_books.js
    │── package.json
    │── .env
    │── README.md
