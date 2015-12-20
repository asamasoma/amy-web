(function() {
  'use strict';

  angular
    .module('amyWeb')
    .controller('CredsController', CredsController);

  /** @ngInject */
  function CredsController($scope) {
  	$scope.data = [
		{
			'name': 'films',
			'items': [
		      {
		      	'title': 'Hypothermia',
		      	'featuring': 'Michael Rooker',
		      	'role': 'Gina',
		      	'billing': 'Principal',
		      	'notes': 'Dark Sky Films/Glass Eye Pix, dir. James Felix McKenney'
		      },
		      {
		      	'title': 'Red',
		      	'featuring': 'Gbenga Akinnagbe',
		      	'role': 'Grace/Red',
		      	'billing': 'Lead',
		      	'notes': '7th Empire Media, dir. Shalini Kantayya'
		      },
		      {
		      	'title': 'Kid Witness',
		      	'featuring': 'Susan Sarandon',
		      	'role': 'Ping',
		      	'billing': 'Supporting',
		      	'notes': 'Kaufman Films, dir. Kevin Kaufman'
		      },
		      {
		      	'title': 'Children of Invention',
		      	'role': 'Susan',
		      	'billing': 'Supporting',
		      	'notes': 'Syncopated Films, dir. Tze Chun'
		      },
		      {
		      	'title': 'Satan Hates You',
		      	'role': 'Kelly',
		      	'billing': 'Supporting',
		      	'notes': 'Glass Eye Pix/MonsterPants, dir. James Felix McKenney'
		      },
		      {
		      	'title': 'Still For Now',
		      	'role': 'Serota',
		      	'billing': 'Lead',
		      	'notes': 'dir. Ning Li'
		      },
		      {
		      	'title': 'Unknown Melody',
		      	'role': 'Mei',
		      	'billing': 'Lead',
		      	'notes': 'dir. Camille Xin'
		      },
		      {
		      	'title': 'Ikenhisu',
		      	'role': 'Oshota',
		      	'billing': 'Lead',
		      	'notes': 'Troopers Touch Inc, dir. La\'Mard Wingster'
		      },
		      {
		      	'title': 'Lydia Li',
		      	'role': 'Lydia',
		      	'billing': 'Lead',
		      	'notes': 'dir. Laura Zaylea'
		      }
			]
		},
		{
			'name': 'television',
			'items': [
		      {
		      	'title': 'Royal Pains',
		      	'role': 'Nurse',
		      	'billing': 'Co-star',
		      	'notes': 'USA Network'
		      },
		      {
		      	'title': 'We Are New York',
		      	'role': 'Lu',
		      	'billing': 'Guest Star',
		      	'notes': 'CUNY & PBS'
		      },
		      {
		      	'title': 'Your Worst Nightmare',
		      	'role': 'Debbie',
		      	'billing': 'Co-star',
		      	'notes': 'Montclair University Dept. of Broadcasting'
		      },
		      {
		      	'title': 'CBS Voting Booth Promo',
		      	'billing': 'Featured',
		      	'notes': 'CBS'
		      },
		      {
		      	'title': 'Time Warner Corporate Profile',
		      	'billing': 'Featured',
		      	'notes': 'Broadstreet'
		      },
		      {
		      	'title': 'Off to College',
		      	'role': 'Student',
		      	'billing': 'Co-star',
		      	'notes': 'Nextpert News'
		      }
			]
		},
		{
			'name': 'theatre',
			'items': [
		      {
		      	'title': 'Opportunity',
		      	'role': 'Michiya Hasegawa',
		      	'notes': 'Polaris North Theatre'
		      },
		      {
		      	'title': 'Trojan Women Redux',
		      	'role': 'Andromache',
		      	'notes': 'The Looking Glass Theatre'
		      },
		      {
		      	'title': 'Sweet Prince',
		      	'role': 'Sarai',
		      	'notes': 'Manhattan Repertory Theatre'
		      },
		      {
		      	'title': 'Resignations',
		      	'role': 'Joy',
		      	'notes': 'The Robert Moss Theatre'
		      },
		      {
		      	'title': 'Yellow Lens',
		      	'role': 'Nai Nai/Madeline',
		      	'notes': 'WOW Café Theatre'
		      },
		      {
		      	'title': 'The Party',
		      	'role': 'Lisa',
		      	'notes': 'Gene Frankel Theatre'
		      },
		      {
		      	'title': 'Love, Life & Redemption',
		      	'role': 'Amy',
		      	'notes': 'Hudson Guild Theatre'
		      },
		      {
		      	'title': 'Roughly True Story',
		      	'role': 'Lauren/Cathy/Mom',
		      	'notes': 'American Globe Theatre'
		      }
			]
		}
	];
	}
 })();