angular.module('recetario.services', [])

.factory('Recetas', function() {

  var postres = [{
    id: 1,
    name: 'New York Cheese Cake',
    descripcion: 'Tarta de queso al horno estilo americano.'
  }];

  return {
    all: function() {
      return postres;
    },
    get: function(idReceta) {
      for (var i = 0; i < postres.length; i++) {
        if (postres[i].id === parseInt(idReceta)) {
          return postres[i];
        }
      }
      return null;
    }
  };
});
