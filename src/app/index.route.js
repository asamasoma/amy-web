(function() {
  'use strict';

  angular
    .module('amyWeb')
    .config(['$stateProvider', '$urlRouterProvider', routeConfig]);

  function routeConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('app',{
        url: '/',
        views: {
            'header': {
                templateUrl: '/templates/partials/header.html'
            },
            'content': {
                templateUrl: '/templates/partials/content.html' 
            },
            'footer': {
                templateUrl: '/templates/partials/footer.html'
            }
        }
    })
    .state('app.reel', {
        url: 'reel',
        views: {
            'content@': {
                templateUrl: '/templates/reel.html'
            }
        }
 
    })
    .state('app.extra', {
        url: 'extra',
        views: {
            'content@': {
                templateUrl: '/templates/extra.html'
            }
        }
 
    })
    .state('app.focused', {
        url: 'focused',
        views: {
            'content@': {
                templateUrl: '/templates/focused.html'
            }
        }
 
    })
    .state('app.creds', {
        url: 'creds',
        views: {
            'content@': {
                templateUrl: '/templates/creds.html'
            }
        }
 
    })
    .state('app.connect', {
        url: 'connect',
        views: {
            'content@': {
                templateUrl: '/templates/connect.html'
            }
        }
 
    });
  }

})();
