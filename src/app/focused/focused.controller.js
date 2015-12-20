(function() {
  'use strict';

  angular
    .module('amyWeb')
    .controller('FocusedController', FocusedController);

  /** @ngInject */
  function FocusedController($scope, Lightbox) {
    var portrait_dir = 'assets/images/portraits/';
  	$scope.folders = [
      {
        'name': 'Lev Gorn',
        'thumbUrl': portrait_dir + 'lev_gorn/Blue1webAmyChang.jpeg',
        'images': [{
                    'url': portrait_dir + 'lev_gorn/Blue1webAmyChang.jpeg',
                    'caption': 'Optional caption'
                  },
                  {
                    'url': portrait_dir + 'lev_gorn/Glasses1webAmyChang.jpg'
                  },
                  {
                    'url': portrait_dir + 'lev_gorn/Green1webAmyChang.jpg'
                  },
                  {
                    'url': portrait_dir + 'lev_gorn/Green2webAmyChang.jpg'
                  },
                  {
                    'url': portrait_dir + 'lev_gorn/Jacket1webAmyChang.jpeg'
                  },
                  {
                    'url': portrait_dir + 'lev_gorn/Jacket2webAmyChang.jpeg'
                  },
                  {
                    'url': portrait_dir + 'lev_gorn/Jacket3webAmyChang.jpeg'
                  },
                  {
                    'url': portrait_dir + 'lev_gorn/Make-up.jpg'
                  },
                  {
                    'url': portrait_dir + 'lev_gorn/Maroon1webAmyChang.jpg'
                  },
                  {
                    'url': portrait_dir + 'lev_gorn/Pink1webAmyChang.jpg'
                  },
                  {
                    'url': portrait_dir + 'lev_gorn/SilverwebAmyChang.jpg'
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
      },
      {
        'name': 'Jesus Ward',
        'thumbUrl': portrait_dir + 'jesus/angel.jpg',
        'images': [{
                    'url': portrait_dir + 'jesus/angel.jpg',
                    'caption': 'Optional caption'
                  },
                  {
                    'url': portrait_dir + 'jesus/angelwhite1.jpg'
                  },
                  {
                    'url': portrait_dir + 'jesus/angelwhite2.jpg'
                  },
                  {
                    'url': portrait_dir + 'jesus/goth.jpg'
                  },
                  {
                    'url': portrait_dir + 'jesus/goth1.jpg'
                  },
                  {
                    'url': portrait_dir + 'jesus/goth2.jpg'
                  },
                  {
                    'url': portrait_dir + 'jesus/suit.jpg'
                  }]
      },
      {
        'name': 'Lars Gerhard',
        'thumbUrl': portrait_dir + 'lars_gerhard/AmyChangHeadshot2014-1.jpg',
        'images': [{
                    'url': portrait_dir + 'lars_gerhard/AmyChangHeadshot2014-1.jpg',
                    'caption': 'Optional caption'
                  },
                  {
                    'url': portrait_dir + 'lars_gerhard/AmyChangHeadshot2014-2.jpg'
                  },
                  {
                    'url': portrait_dir + 'lars_gerhard/AmyChangHeadshot2014-3.jpg'
                  },
                  {
                    'url': portrait_dir + 'lars_gerhard/AmyChangHeadshot2014-4.jpg'
                  }]
      },
      {
        'name': 'Shawn Greene',
        'thumbUrl': portrait_dir + 'shawn_greene/Amy_Shawn_BlueShirt.jpg',
        'images': [{
                    'url': portrait_dir + 'shawn_greene/Amy_Shawn_BlueShirt.jpg',
                    'caption': 'Optional caption'
                  },
                  {
                    'url': portrait_dir + 'shawn_greene/Amy_Shawn_Brown.jpg'
                  },
                  {
                    'url': portrait_dir + 'shawn_greene/Amy_Shawn_Face.jpg'
                  },
                  {
                    'url': portrait_dir + 'shawn_greene/Amy_Shawn_Lights.jpg'
                  },
                  {
                    'url': portrait_dir + 'shawn_greene/Amy_Shawn_YellowShirt.jpg'
                  }]
      },
      {
        'name': 'Corey Hayes',
        'thumbUrl': portrait_dir + 'corey_hayes/coreyhayes1.jpg',
        'images': [{
                    'url': portrait_dir + 'corey_hayes/coreyhayes1.jpg',
                    'caption': 'Optional caption'
                  },
                  {
                    'url': portrait_dir + 'corey_hayes/coreyhayes2.jpg'
                  },
                  {
                    'url': portrait_dir + 'corey_hayes/coreyhayes3.jpg'
                  },
                  {
                    'url': portrait_dir + 'corey_hayes/coreyhayes4.jpg'
                  },
                  {
                    'url': portrait_dir + 'corey_hayes/coreyhayes5.jpg'
                  },
                  {
                    'url': portrait_dir + 'corey_hayes/coreyhayes6.jpg'
                  },
                  {
                    'url': portrait_dir + 'corey_hayes/coreyhayes7.jpg'
                  },
                  {
                    'url': portrait_dir + 'corey_hayes/coreyhayes8.jpg'
                  },
                  {
                    'url': portrait_dir + 'corey_hayes/coreyhayes9.jpg'
                  }]
      }
    ]; 

    $scope.openLightboxModal = function (folder, index) {
      Lightbox.openModal(folder.images, index);
    };
  }
})();