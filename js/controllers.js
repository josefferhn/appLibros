app.controller('appController',function ($scope,appFactory){
	var vm = this;
	
	$scope.libros = {};
	appFactory.getArchivo('data/libros.json').then(function(response) {
		$scope.libros = response.data;
		console.log($scope.libros);
	},function(error){
		console.log('Error obteniendo libros: '+error.statusText);
	});
	
	/*$scope.findLibro = {};
	appFactory.findLibro('Zelda').then(function(response){
		$scope.findLibro = response;
	});
	*/
	$scope.findLibro = {};
	$scope.findLibro = function(iValue) {
		var libro = [];
		angular.forEach($scope.libros, function(value, key) {
		  if (value.nombre === iValue) {
			  $scope.findLibro = [value];
			  //libro.push(value);
		  }
		});
		console.log($scope.findLibro);
	};
	
	return $scope;
});