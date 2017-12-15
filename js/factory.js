app.factory('appFactory',function($http){
	
	function getArchivo(archivo){
		return $http.get(archivo);
	}
	
	function findLibro(iValue){
		var data = getArchivo('data/libros.json');
		var libro = [];
		angular.forEach(data, function(value, key) {
		  if (value.nombre === iValue) {
			  libro.push(value);
		  }
		});
		return libro;
	}
	
	return{
		getArchivo: getArchivo,
		findLibro: findLibro
	}
	

});
