(function() {
  'use strict';

  angular
    .module('amyWeb')
    .controller('ExtraController', ExtraController)
    .filter('trustAsResourceUrl', ['$sce', function($sce) {
		return function(url) {
		return $sce.trustAsResourceUrl(url);
	};}]);

  /** @ngInject */
  function ExtraController($scope) {
  	$scope.myInterval = 5000;
  	$scope.noWrapSlides = false; 
  	$scope.slides = [
      {
        url:  'https://player.vimeo.com/video/171354973',
        link: 'https://vimeo.com/171354973',
        text: 'TD BANK Commercial: Meet B.A.R.T. (60 sec)'
      },
      {
        url:  'https://player.vimeo.com/video/171977893',
        link: 'https://vimeo.com/171977893',
        text: 'TD BANK Commercial: We’re still open, B.A.R.T (30 sec)'
      },
      {
        url:  'https://player.vimeo.com/video/169111520',
        link: 'https://vimeo.com/169111520',
        text: 'CUSTOMER #935 - At the laundromat'
      },
      {
        url:  'https://player.vimeo.com/video/137779029',
        link: 'https://vimeo.com/137779029',
        text: 'DELL National Commercial (30 second spot)'
      },
      {
        url:  'https://player.vimeo.com/video/137779028',
        link: 'https://vimeo.com/137779028',
        text: 'DELL National Commercial (60 second spot)'
      },
      {
        url:  'https://player.vimeo.com/video/137779034',
        link: 'https://vimeo.com/137779034',
        text: 'Verizon Wireless National Commercial: "Employee of the Month"'
      },
      {
        url:  'https://player.vimeo.com/video/169151392',
        link: 'https://vimeo.com/169151392',
        text: 'TRIVIA NIGHT - Where the magic happens'
      },
      {
        url:  'https://player.vimeo.com/video/137779030',
        link: 'https://vimeo.com/137779030',
        text: 'SATAN HATES YOU, directed by James Felix McKenney'
      },
      {
        url:  'https://player.vimeo.com/video/137779027',
        link: 'https://vimeo.com/137779027',
        text: 'SALON, directed by ManSee Kong'
      },
      {
        url:  'https://player.vimeo.com/video/137779031',
        link: 'https://vimeo.com/137779031',
        text: 'SMOKE GETS IN YOUR EYES, directed by Alexander Lau'
      }];
  }
})();