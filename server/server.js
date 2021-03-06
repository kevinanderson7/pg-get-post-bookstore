const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
const bookRouter = require('./routes/books.router.js');
const magazineRouter = require('./routes/magazines.router.js');

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/books', bookRouter);
app.use('/magazines', magazineRouter);

app.use(express.static('server/public'));

app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
