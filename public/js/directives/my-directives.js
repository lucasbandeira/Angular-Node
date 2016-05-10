angular.module('myDirectives', []).directive('myPanel', 
	function() {
		var ddo = {};
		ddo.restric = "AE"; //devo definir qual sua restrinção de uso: Attribute Element
		ddo.scope = { //definir os dados privados da diretiva
			titulo: '@' //capturar o valor do parametro/atributo a ser recebido
		};
		ddo.transclude = true; //manter um elemento filho dentro de uma diretiva no meu index
		ddo.templateUrl = 'js/directives/my-panel.html';
		return ddo;
	}).directive('myPicture',
	function() {
		var ddo = {};
		ddo.restric = "AE"; //devo definir qual sua restrinção de uso: Attribute Element
		ddo.scope = { //definir os dados privados da diretiva
			url: '@', //capturar o valor do parametro/atributo a ser recebido
			titulo: '@'
		};
		ddo.templateUrl = 'js/directives/my-picture.html';
		return ddo;
	});