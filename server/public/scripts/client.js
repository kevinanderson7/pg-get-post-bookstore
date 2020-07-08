$(document).ready(onReady);

function onReady() {
  $('#submit-book').on('click', clickSubmitBook);
}

function clickSubmitBook() {
  console.log('clicking Submit Book');
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
      for (let book of listOfBooks) {
        $('#bookTableBody').append(`
        <tr>
        <td>${artist.artist_name}</td>
        <td>${artist.year_born}</td>
        <td>${artist.home_town}</td>
      </tr>`);
      }
    })
    .catch(function (error) {
      console.log('error in book get', error);
    });
}
