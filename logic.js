function add(){
  BN1=BN.value
  AN1=AN.value
  CP1=CP.value
  if(BN1 in localStorage) {
    alert("book already present")
  }
  else{
    book={BN1,AN1,CP1}
    localStorage.setItem(BN1,JSON.stringify(book))
    alert("book added successfully")
  }

}

function serchbook(){
    book_name=SB.value
    if(book_name in localStorage){
        bookDetails=JSON.parse(localStorage.getItem(book_name))
        result.innerHTML= `<div class="card" style="width: 18rem;">
  <img src=${bookDetails.CP1} class="card-img-top text-center" alt="...">
  <div class="card-body text-center">
    <h5 class="card-title text-center fs-3" >Book Name: ${bookDetails.BN1}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item text-center fs-4">Author Name: ${bookDetails.AN1}</li>
   
  </ul>
 
</div>`
    }
    else{
        result.innerHTML=`<h1 class="text-center text-danger">Book is Not found</h1>`
    }
}



