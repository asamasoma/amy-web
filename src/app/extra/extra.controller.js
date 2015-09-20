(function() {
  'use strict';

  angular
    .module('amyWeb')
    .controller('ExtraController', ExtraController)
    .filter('trustAsResourceUrl', ['$sce', function($sce) {
		return function(url) {
		return $sce.trustAsResourceUrl(url);
	}}]);

  /** @ngInject */
  function ExtraController($scope) {
  	$scope.myInterval = 5000;
  	$scope.noWrapSlides = false;
  	var slides = $scope.slides = [];
  	$scope.addSlide = function() {
    	slides.push({
      	url: 'https://player.vimeo.com/video/137779029',
      	link: 'https://vimeo.com/137779029',
      	text: 'DELL National Commercial (30 second spot)'
    	});
  	};
  	for (var i=0; i<4; i++) {
    	$scope.addSlide();
  	}
  }
})();