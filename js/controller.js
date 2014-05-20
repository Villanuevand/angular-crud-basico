//Controladores
app.controller('appController', function ($scope) {
	//Añadiendo Usuarios por Defecto
	$scope.usuarios = [
	{
            nombre : "Lizbekt Novoa",
            web : "http://lano-voa.com",
            edad : "27 años",
            profesion : "Desarrollador Web"
        },
        {
            nombre : "Jack Sparrwo",
            web : "http://jack.com",
            edad : "42 años",
            profesion : "Pirata"
        },
        {
            nombre : "Andres Villanueva",
            web : "http://villanuevand.com",
            edad : "28 años",
            profesion : "Desarrollador Web"
        },
        {
            nombre : "Leonerzo Villazana",
            web : "http://pinchegordoculero.com",
            edad : "26 años",
            profesion : "Desarrollador Web"
        },
        {
            nombre : "Grabiela de Vallenilla",
            web : "http://grabi.com",
            edad : "24 años",
            profesion : "Desarrollador Web"
        },
        {
            nombre : "Miguel Roa",
            web : "http://pein.com",
            edad : "31 años",
            profesion : "Desarrollador Web"
        },
        {
            nombre : "Rafa Marquez",
            web : "http://rafa.com",
            edad : "31 años",
            profesion : "Desarrollador Web"
        }
	]
})

//route params es para identificar los segmentos de la url, en este caso, para reconocer usuarios
app.controller('infoController', function infoController($scope,$routeParams){
	$scope.usuario = $scope.usuarios[$routeParams.id];
})
//Controlador para guardar usuarios nuevos
app.controller('addController', function addController($scope,$location){
	$scope.textButton = 'Añadir Nuevo Usuario';
	$scope.usuario = {};
	$scope.nuevoUsuario = function(){
		$scope.usuarios.push($scope.usuario);
		$location.url('/');
	}
})
//Controlador para Editar usuarios
app.controller('editController', function editController($scope,$routeParams,$location){
	//Obteniendo el usuario a editar usando $routeParams
	$scope.textButton = 'Editar Usuario';
	$scope.usuario = $scope.usuarios[$routeParams.id];
	$scope.editarUsuario = function(){
		$scope.usuarios[$routeParams] = $scope.usuario;
		$location.url('/');
	}
})
//Controlador para eliminar usuarios dependiendo del ID
app.controller('removeController', function removeController($scope,$routeParams,$location){
	$scope.usuario = $scope.usuarios[$routeParams.id];
	$scope.removerUsuario = function(){
		$scope.usuarios.splice($routeParams.id,1);
		$location.url('/');
	}
})