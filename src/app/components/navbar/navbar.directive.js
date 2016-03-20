(function() {
  'use strict';

  angular
    .module('amyWeb')
    .directive('amyNavbar', amyNavbar);

  /** @ngInject */
  function amyNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
    };

    return directive;
  }

})();
