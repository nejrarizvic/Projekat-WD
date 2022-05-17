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
                    <button type="button" class="btn btn-secondary" href="" class="btn content__books__cards__root-buttons" onclick="deletebook(this)" id="content__books__cards__root-buttons-delete"> <span class="text-light">Delete book</span></button>
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




