(function() {
  'use strict';

  angular
    .module('amyWeb')
    .controller('FocusedController', FocusedController);

  /** @ngInject */
  function FocusedController($scope, Lightbox) {
    var portrait_dir = 'assets/images/portraits/'
  	$scope.folders = [
      {
        'name': 'Lev Gorn',
        'thumbUrl': portrait_dir + 'lev_gorn/Web/Blue1webAmyChang.jpeg',
        'images': [{
                    'url': portrait_dir + 'lev_gorn/Web/Blue1webAmyChang.jpeg',
                    'caption': 'Optional caption'
                  },
                  {
                    'url': portrait_dir + 'lev_gorn/Web/Glasses1webAmyChang.jpg'
                  },
                  {
                    'url': portrait_dir + 'lev_gorn/Web/Green1webAmyChang.jpg'
                  },
                  {
                    'url': portrait_dir + 'lev_gorn/Web/Green2webAmyChang.jpg'
                  },
                  {
                    'url': portrait_dir + 'lev_gorn/Web/Jacket1webAmyChang.jpeg'
                  },
                  {
                    'url': portrait_dir + 'lev_gorn/Web/Green1webAmyChang.jpg'
                  }]
      },
      {
        'name': 'Helen Chan',
        'thumbUrl': portrait_dir + 'helen_chan/helen1.jpg',
        'images': [{
                    'url': portrait_dir + 'helen_chan/helen1.jpg',
                    'caption': 'Optional caption'
                  },
                  {
                    'url': portrait_dir + 'helen_chan/helen2.jpg'
                  },
                  {
                    'url': portrait_dir + 'helen_chan/helen3.jpg'
                  },
                  {
                    'url': portrait_dir + 'helen_chan/helen4.jpg'
                  },
                  {
                    'url': portrait_dir + 'helen_chan/helen5.jpg'
                  },
                  {
                    'url': portrait_dir + 'helen_chan/helen6.jpg'
                  }]
      }
    ]; 

    $scope.openLightboxModal = function (folder, index) {
      Lightbox.openModal(folder.images, index);
    };
  }
})();