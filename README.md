# PG GET & POST

```
,________,         .------,          .------,         .------.
|________|       ,'_____,'|        ,'_____,'|        (        )
|        |       |      | |        | ____ | |        |~------~|
|        |       |      | |        | ____ | |        |~------~|
|        |       |      | ;        | ____ | ;        |~------~|
|________|       |______|'         |______|'         `.______.'
 HTML/CSS          jQuery        Node / Express      PostgreSQL
```
Let's build a basic bookstore! 

We want to make a page to show all of our books and add new ones.


## Database Setup

Set up a `bookstore` database.  

Add a `books` table with columns for:
 - `title`: the name of the book - required, allow up to 250 characters
 - `author`: the author of the book - required, allow up to 100 characters
 - `published`: the date originally published - optional 


## Base Mode

- [ ] Express server setup w/ static files
- [ ] GET route to send back all books 
- [ ] POST route to add a book
- [ ] `index.html` page shows all books (Ajax GET)
- [ ] page allows you to add a new book (Ajax POST)
- [ ] Clear form on successful add of new book
- [ ] Page should refresh with up to date data after new book added

## Stretch Goals

### Magazines

Add a `magazines` table with columns for:
 - `title`: the name of the magazine
 - `issue_number`: the magazine issue number
 - `pages`: how many pages in the magazine

Requirements

- [ ] GET route to send back all magazines 
- [ ] POST route to add a magazine
- [ ] `index.html` page shows all magazines (Ajax GET)
- [ ] page allows you to add a new magazine (Ajax POST)
- [ ] Clear form on successful add of new magazine
- [ ] Page should refresh with up to date data after new magazine added

### Styling

- [ ] Improve the styling of the page -- Bootstrap & CSS
    - [ ] Center the header, table, on the page
    - [ ] Give alternating rows difference in color
    - [ ] Give Labels to the input boxes
    - [ ] Give the form its own area on the page -- make it distinct from the table
    - [ ] Make the page responsive -- Bootstrap Containers will be helpful!

### Validation
- [ ] Add validation to your form(s)
    - [ ] If a user tries to enter a book or magazine where one of the fields is empty, it should show an alert and not make a request to the server.

