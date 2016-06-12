myApp.controller("MeuController", function($scope){
	$scope.pessoa = {};
	$scope.isEdit = false;
	$scope.dados = [];

//Salvar os dados
	$scope.enviaDados = function(pessoa){

		if ($scope.isEdit) {
			$scope.atualizarDados(pessoa);
		}else{
			var minhaPessoa = angular.copy(pessoa);
			$scope.dados.push(minhaPessoa);
			//$scope.pessoa = {};
			delete $scope.pessoa;
		}
		$scope.isVisible = false;
	}


//Função para exclui dados
	$scope.excluirDados = function(item){
		$scope.dados.splice(item,1);
	}

//Cancela dados 
	$scope.cancelaDados = function(item){
		delete $scope.pessoa;
		$scope.isEdit = false;
		$scope.isVisible = false;
	}


//Editar os dados
	$scope.editarDados = function(item, idx){
		$scope.pessoa = angular.copy(item);
		$scope.idx = idx;
		$scope.isEdit = true;
		$scope.isVisible = true;


	}

//Atualizar dados
	$scope.atualizarDados = function(data){
		$scope.isEdit = false;
		$scope.dados[$scope.idx] = angular.copy(data);
		delete $scope.pessoa;
	}

})

