angular.module('recetario.controllers', [])

.controller('categoriasCtrl', function($scope) {

  //cogemos identificadores de las categorias de recetas para enlazar las imagenes de portada
  $scope.postres_id = idPostres;
  $scope.platos_id = idPlatos;

})

.controller('recetasCtrl', function($scope, $stateParams, Recetas) {

  //obtenemos listado de recetas
  $scope.recetas = Recetas.all();

})

.controller('recetaCtrl', function($scope, $stateParams, $ionicModal, Recetas) {

  //obtenemos datos de la receta segun su identificador
  $scope.receta = Recetas.get($stateParams.idReceta);

  //inicializamos template para el modal de los ingredientes
  $ionicModal.fromTemplateUrl('templates/ingredientes.html', {
    id: '1',
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modalIng = modal;
  });

  //inicializamos template para el modal de las instrucciones
  $ionicModal.fromTemplateUrl('templates/instrucciones.html', {
    id: '2',
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modalIns = modal;
  });

  //funcion que abre el modal que corresponde segun su id
  $scope.openModal = function(id){
    if(id==1){
      $scope.modalIng.show();
    }else{
      $scope.modalIns.show();
    }
  };

  //funcion que cierra el modal que corresponde segun su id
  $scope.closeModal = function(id) {
    if(id==1){
      $scope.modalIng.hide();
    }else{
      $scope.modalIns.hide();
    }
  };
});
