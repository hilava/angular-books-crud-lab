angular.module('libraryApp')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject=['$http', '$routeParams', '$location'];

function BooksShowController($http, $routeParams, $location) {
  var vm = this;
  vm.book = {};
  var endpoint = "https://super-crud.herokuapp.com/books";

  $http({
    method: 'GET',
    url: endpoint + "/" + $routeParams.id
    }).then(showSuccess, showError);


  function showSuccess(response){
    console.log(response);
    vm.book = response.data;
  }

  function showError(err){
    console.log(err);
  }

  vm.deleteBook = function(){
    $http({
      method: 'DELETE',
      url: endpoint + "/" + $routeParams.id,
      data: vm.book
    }).then(deleteSuccess, deleteError);
  };

  function deleteSuccess(response){
    console.log(response.data);
    //redirect to home page
    $location.path("/");
  }

  function deleteError(err){
    console.log(err);
  }

  vm.updateBook = function(){
    $http({
      method: 'PUT',
      url: endpoint + "/" + $routeParams.id,
      data: vm.book
    }).then(updateSuccess, updateError);
  };

  function updateSuccess(response){
    //no need to do anything
    console.log("Response: ", response);
    //redirect to home page
    $location.path("/");
  }

  function updateError(err){
    console.log("Error: ", err);
  }

  vm.cancelUpdate = function(){
    //redirect to home page
    $location.path("/");
  };

  vm.back = function(){
    //redirect to home page
    $location.path("/");
  };

//close BooksShowController function
}
