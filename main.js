const BASE_URL = "https://ptf-web-dizajn-2022.azurewebsites.net/books";





fetch('https://ptf-web-dizajn-2022.azurewebsites.net/books')
.then(res => {
    if(!res.ok) {
        throw Error('[GRESKA] Dogodila se greska.');
    } 
    return res.json();
})
.then(data => {
    const cardList = document.querySelector('#content__books__cards');
    let cards = '';

    data.forEach(element => {
        cards += `
     
            <div class="book-head" style="width: 18rem; height: auto; margin: 0 20px; margin-top: 20px;" id="${element.id}">
                <img src="${element.image}" class="card-img-top" alt="..." style="width: 100%; height: 60%;">
                <div class="book-body">
                    <h5 class="card-title text-dark">${element.name}</h5>
                    <p class="card-title text-dark">Genre: ${element.genre}</p>
                    <p class="card-text text-dark">Author: ${element.author.name} </p>
                    <div class="card-overlay">
                    </div>
                    <button type="button" class="btn btn-secondary" href="" class="btn content__books__cards__root-buttons" onclick="deleteBooks(this)" id="content__books__cards__root-buttons-delete"> <span class="text-light">Delete book</span></button>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Reservation book</button>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Reservation your book:</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            <form>
                              <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">Frst name:</label>
                                <input type="text" class="form-control" id="recipient-name">
                              </div>
                              <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">Last name:</label>
                                <input type="text" class="form-control" id="recipient-name">
                              </div>
                              <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">E-mail:</label>
                                <input type="text" class="form-control" id="recipient-name">
                              </div>
                              <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">Contact:</label>
                                <input type="text" class="form-control" id="recipient-name">
                              </div>
                              <div class="mb-3">
                                <label for="message-text" class="col-form-label"> Day:</label>
                                <textarea class="form-control" id="message-text"></textarea>
                              </div>
                             
                            </form>
                          </div>
                    
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Reservation</button>
                           
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                </div>
            </div>  
                              
        `
    })

    cardList.innerHTML = cards; 
})



const deleteBooks = (books) => {
  let booksId = books.parentElement.parentElement.id;
  
  fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/books/${booksId}`, {
      method: 'DELETE'
  })
  .then(res => {
      if (res.ok) {
          console.log(`Status code: ${res.status}`);
          
          let booksCard = document.getElementById(booksId);
         booksCard.remove();
          
      } else {
          let popup = document.querySelector('#error-pop-up');
      }
  })
}


const addBook = () => {
  const bookName = document.getElementById('book-name').value;
  
  fetch(`${BASE_URL}/api/books/new`, {
      method: 'POST',
      headers: new Headers({'content-type': 'application/json'}),
      body: JSON.stringify({
          name: bookName
      })
  })
  .then(res => {
      console.log(res);
  })
}


/*
const fillEditData = (bookId) => {
  const book = books.find(book => book.id === bookId);
  const bookFormId = document.getElementById('book-id');
  const bookFormName = document.getElementById('book-name');
  const bookFormImage = document.getElementById('book-image');
  const bookFormAuthor = document.getElementById('book-author');

  bookFormId.value = book.id;
  bookFormName.value = book.name;
  bookFormImage.value = book.imageUrl;
  bookFormAuthor.value = book.author;
}

const editBook = () => { 
  const bookFormId = document.getElementById('book-id').value;
  const bookFormName = document.getElementById('book-name').value;
  const bookFormImage = document.getElementById('book-image').value;
  const bookFormAuthor = document.getElementById('book-author').value;

fetch(`${BASE_URL}/api/Book`, {
  method: 'PUT', 
  headers: new Headers({'content-type': 'application/json'}),
  body: JSON.stringify({
      id: bookFormId,
      name: bookFormName,
      imageUrl: bookFormImage,
      author: bookFormAuthor
  })
})
.then(res => {
  if(!res.ok)
  {
      alert('Error');
  }
})
}

*/



