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

  // $http({
  // method: 'GET',
  // url: 'api/albums/' + $routeParams.id
  // }).then(function success(response) {
  //   vm.album = response.data;
  // }, function errorCallback(response) {
  //     console.log('There was an error getting the data', response);
  // });

}
