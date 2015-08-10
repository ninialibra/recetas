angular.module('recetario', ['ionic', 'recetario.controllers', 'recetario.services'])

.run(function($ionicPlatform, $rootScope, $state) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });

  $rootScope.irInicio = function() {

  }

})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('categorias', {
    url: '/categorias',
    views: {
      'categorias': {
        templateUrl: 'templates/categorias.html',
        controller: 'categoriasCtrl'
      }
    }
  })

  .state('recetas', {
    url: '/recetas/:idCategoria',
    views: {
      'recetas': {
        templateUrl: 'templates/recetas.html',
        controller: 'recetasCtrl'
      }
    }
  })

  .state('receta', {
    url: '/receta/:idReceta',
    views: {
      'receta': {
        templateUrl: 'templates/receta.html',
        controller: 'recetaCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/categorias');

});
