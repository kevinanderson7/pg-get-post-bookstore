$(document).ready(onReady);

function onReady() {
  $('#submit-book').on('click', clickSubmitBook);
  $('#submit-magazine').on('click', clickSubmitMagazine);
  getBookData();
  getMagazineData();
}

function clickSubmitBook() {
  console.log('clicking Submit Book');
  sendBookToServer();
}

function clickSubmitMagazine() {
  console.log('clicking Submit Magazine');
  sendMagazineToServer();
}

function sendBookToServer() {
  console.log('in function sendBookToServer');

  const bookToSend = {
    title: $('#book-title').val(),
    author: $('#book-author').val(),
    published: $('#book-published').val(),
  };
  console.log(bookToSend);
  if ((bookToSend.title || bookToSend.author || bookToSend.published) === '') {
    alert('Please fill in missing book fields');
  } else {
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

function getMagazineData() {
  $.ajax({
    method: 'GET',
    url: '/magazines',
  })
    .then(function (response) {
      const listOfMagazines = response;
      console.log('server response:', response);

      $('#magazine-title').val('');
      $('#magazine-issue').val('');
      $('#magazine-pages').val('');

      $('#magazineTableBody').empty();
      for (let magazine of listOfMagazines) {
        $('#magazineTableBody').append(`
          <tr>
          <td>${magazine.title}</td>
          <td>${magazine.issue_number}</td>
          <td>${magazine.pages}</td>
        </tr>`);
      }
    })
    .catch(function (error) {
      console.log('error in magazine get', error);
    });
}

function sendMagazineToServer() {
  console.log('in function sendMagazineToServer');

  const magazineToSend = {
    title: $('#magazine-title').val(),
    issue_number: $('#magazine-issue').val(),
    pages: $('#magazine-pages').val(),
  };
  if (
    (magazineToSend.title ||
      magazineToSend.issue_number ||
      magazineToSend.pages) === ''
  ) {
    alert('Please fill in missing magazine fields');
  } else {
    console.log(magazineToSend);

    $.ajax({
      method: 'POST',
      url: '/magazines',
      data: magazineToSend,
    })
      .then(function (response) {
        console.log(response);
        getMagazineData();
      })
      .catch(function (error) {
        console.log('error in magazine post', error);
      });
  }
}
