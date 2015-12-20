(function() {
  'use strict';

  angular
    .module('amyWeb')
    .controller('CredsController', CredsController);

  /** @ngInject */
  function CredsController($scope) {
  	$scope.films = [
      {
      	'title': 'Still For Now',
      	'featuring': 'Michael Rooker',
      	'role': 'Serota',
      	'status': 'Lead',
      	'notes': 'dir. Ning Lee'
      }
    ];
   }
 })();