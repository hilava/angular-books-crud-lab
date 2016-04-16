angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject=['$http'];

function BooksIndexController( $http ) {
  var vm = this;
  var endpoint = "https://super-crud.herokuapp.com/books";
  vm.newBook={};
  vm.book={};

  $http({
    method: 'GET',
    url: endpoint
  }).then(indexSuccess, indexError);


  function indexSuccess(response){
    vm.books = response.data.books;
  }

  function indexError(err){
    console.log(err);
  }

vm.createBook = function() {
  $http({
    method: 'POST',
    url: endpoint,
    data: vm.newBook
  }).then(createSuccess, createError);
};

function createSuccess(response){
  vm.books.push(response.data);
}

function createError(err){
  console.log(err);
}



//close BooksIndexController
}
