//var app = angular.module('ngApp',[]);

var myApp = {};
var mainView = {};
var rightView = {};
var $$ = Dom7;

angular.module("ngApp", [])

.run(function() {

    myApp = new Framework7({
		modalTitle: 'Framework7',
		cache:false,
		swipeBackPage:true,
		swipePanel: 'left',
        material: true,
        pushState: false,
        angular: true
    });
    mainView = myApp.addView('.view-main', {});
	
	myApp.onPageInit('info', function (page) {
		myApp.showIndicator();
		var isbn = page.query.q;
		
		//angular.element('appController').scope().makeAlert('This is for Test');
		myApp.hideIndicator();
	});
	
})


.controller("appController", ["$scope", "$compile", "$rootScope", "appFactory", function($scope, $compile, $rootScope,appFactory) {
    var vm = this;
	$scope.title = "Libros Diseño Web II";
	$scope.isbn = "0";
	
	$scope.libros = {};
	appFactory.getArchivo('data/libros.json').then(function(response) {
		$scope.libros = response.data;
		//console.log($scope.libros);
	},function(error){
		console.log('Error obteniendo libros: '+error.statusText);
	});
	
	$scope.setIsbn = function(iValue){
		console.log(iValue);
		$scope.isbn = iValue;
	}
	
	
	
	return $scope;
}])


.factory('appFactory',function($http){
	
	function getArchivo(archivo){
		return $http.get(archivo);
	}
	
	function obtenerLibros(){
		
		getArchivo('data/libros.json').then(function(response) {
			return response.data;	
		});
	}
	
	function findLibro(iValue){
		var libro = [];
		getArchivo('data/libros.json').then(function(response) {
			var data = response.data;	
			angular.forEach(data, function(value, key) {
			  if (value.nombre === iValue) {
				  libro.push(value);
				  return libro;
			  }
			});
		});
				
		return libro;
	}
	
	return{
		getArchivo: getArchivo,
		findLibro: findLibro,
		obtenerLibros: obtenerLibros
	}
	

})


