# BoobleBook CLI app

#### Create a command line application that allows you to use the Google Books API to search for books and construct a reading list.

**This application should allow you to:**

- [x] Type in a query and display a list of 5 books matching that query.
- [x] Each item in the list should include the book's author, title, and publishing company.
- [x] A user should be able to select a book from the five displayed to save to a “Reading List”
- [x] View a “Reading List” with all the books the user has selected from their queries -- this is a local reading list and not tied to Google Books’s account features.

## Getting started 🤸‍♀️

**To import the project locally:**

1 - In your terminal: `git clone https://github.com/sarahyjja/BoobleBook.git`

2 - To navigate in the folder: `cd BoobleBook`

3 - Install the dependencies running in your terminal: `npm install`


**To run the project locally:**

When the project is imported, open your console/terminal and start the program by writing a command with this syntax:

   `npm start` -> the console will ask you to add a command
   
   `npm start search` | `npm start save` | `npm start list` -> these are the 3 commands that gives you access to manipulate the app
   
   `npm start search <word>` | `npm start save <an index number>` -> add a third argument to access infos

*PS: To search a query with multiple words do -> `npm start search <'a lot of words inside quotes'>`*

#### For exemple:
- `npm start search Art` -> That will retrieves you a list of 5 books

![](https://i.imgur.com/DypXvi3.png)

- `npm start save 3` -> That will save the item with the number 3 in your list inside your `bookshelf.json` file

![](https://i.imgur.com/02fF4Jj.png)

- `npm start list` -> That will display your reading list which is inside your bookshelf file

![](https://i.imgur.com/8qMjhBl.png)


## Tech stuff 💻

The project is build entirely in Vanilla Javascript.

In the project, Axios library is used with Node.js to send asynchronous HTTP request to Google Book REST web services.

## Testing 🐿

The `test` folder contains all the tests created for this app.
JEST is the testing framework in use in this app.

**To run the test:**

`npm test` -> inside your terminal/console


## What I've learned 👣

- Local storage is only for the browser!!!
- To have the possibility to save an item, like the browser, I fake a 'cache' file. This file is created every time that a search is run and save the search inside. When the app is running and the first search is done, this file will then contains 5 items due to the most recent search. Every time the command search is used, this file is overwritten by the most recent search.
- I don't need API key all the time!


## What I struggled with 💆‍♀️

- Local storage again! I had to find solution to manage it and I spent quite some time to really understand what I was looking for.


## What I'm happy with 💛


- As I didn't have used a thousand libraries to do this project
- As I stayed as simple as I could to keep a clear and clean code
- As I sticked to the TDD methodology to test the project


## What's next? Stretch goals 👩‍🎤

- The `save` command can save multiple books in one time
- Deleting the whole list or just an item from the list
- Give to this app a bit of ✨ love ✨ with a less abrupt interface
