//Creación del Módulo "app"
var app = angular.module('app', ['ngRoute']);

//Ruteando la aplicación
app.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl:"partials/index.html"
	})
	/**
	* Esta es la forma de decirle a angular que 
	* vamos a pasar una variable por la url.
	*/
	.when('/info/:id', {
		templateUrl: 'partials/info.html',
		controller: 'infoController'
	})
	.when('/add', {
		title: 'Añadir Usuario',
		templateUrl: 'partials/add.html',
		controller: 'addController'
	})
	.when('/edit/:id', {
		title: 'Editar Usuario',
		templateUrl: 'partials/edit.html',
		controller: 'editController'
	})
	.when('/remove/:id', {
		title: 'Elimiar Usuario',
		templateUrl: 'partials/remove.html',
		controller: 'removeController'
	})
	.otherwise({ redirectTo: '/' })
})
