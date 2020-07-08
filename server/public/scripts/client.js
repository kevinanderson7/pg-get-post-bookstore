$(document).ready(onReady);

function onReady() {
  $('#submit-book').on('click', clickSubmitBook);
  getBookData();
}

function clickSubmitBook() {
  console.log('clicking Submit Book');
  sendBookToServer();
}

function sendBookToServer() {
  console.log('in function sendBookToServer');

  const bookToSend = {
    title: $('#book-title').val(),
    author: $('#book-author').val(),
    published: $('#book-published').val(),
  };
  console.log(bookToSend);

  $.ajax({
    method: 'POST',
    url: '/books',
    data: bookToSend,
  })
    .then(function (response) {
      console.log(response);
      getBookData();
    })
    .catch(function (error) {
      console.log('error in book post', error);
    });
}

function getBookData() {
  $.ajax({
    method: 'GET',
    url: '/books',
  })
    .then(function (response) {
      const listOfBooks = response;
      console.log('server response:', response);

      $('#book-title').val('');
      $('#book-author').val('');
      $('#book-published').val('');

      $('#bookTableBody').empty();
      for (let book of listOfBooks) {
        $('#bookTableBody').append(`
        <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.published}</td>
      </tr>`);
      }
    })
    .catch(function (error) {
      console.log('error in book get', error);
    });
}
