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
        url:  'https://player.vimeo.com/video/137779029',
        link: 'https://vimeo.com/137779029',
        text: 'DELL National Commercial: The Power of DELL'
      },
      {
        url:  'https://player.vimeo.com/video/171977893',
        link: 'https://vimeo.com/171977893',
        text: 'TD BANK Commercial: We’re Still Open, B.A.R.T.'
      },
      {
        url:  'https://player.vimeo.com/video/172907126',
        link: 'https://vimeo.com/172907126',
        text: 'HYPOTHERMIA, directed by James Felix McKenney'
      },
      {
        url:  'https://player.vimeo.com/video/172608991',
        link: 'https://vimeo.com/172608991',
        text: 'MASTER OF NONE, directed by & starring Aziz Ansari'
      },
      {
        url:  'https://player.vimeo.com/video/169151392',
        link: 'https://vimeo.com/169151392',
        text: 'TRIVIA NIGHT - Where The Magic Happens, directed by Robert Gregson'
      },
      {
        url:  'https://player.vimeo.com/video/169111520',
        link: 'https://vimeo.com/169111520',
        text: 'CUSTOMER #935 - At The Laundromat, directed by Smeralda Abel'
      },
      {
        url:  'https://player.vimeo.com/video/137779034',
        link: 'https://vimeo.com/137779034',
        text: 'Verizon Wireless National Commercial: "Employee of the Month"'
      },
      {
        url:  'https://player.vimeo.com/video/137779030',
        link: 'https://vimeo.com/137779030',
        text: 'SATAN HATES YOU, directed by James Felix McKenney'
      },
      {
        url:  'https://player.vimeo.com/video/172612723',
        link: 'https://vimeo.com/172612723',
        text: 'SRIRACHA Commercial: Battle of the Pains'
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
      },
       {
        url:  'https://player.vimeo.com/video/137779028',
        link: 'https://vimeo.com/137779028',
        text: 'DELL National Commercial: Do More With DELL'
      },
      {
        url:  'https://player.vimeo.com/video/171354973',
        link: 'https://vimeo.com/171354973',
        text: 'TD BANK Commercial: Meet B.A.R.T.'
      }];
  }
})();