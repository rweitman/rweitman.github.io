var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(function ($routeProvider) {


  $routeProvider

  .when('/', {

    templateUrl: 'main.html',
    controller: 'mainController'

  })
  .when('/advantage', {

    templateUrl: 'advantage.html',
    controller: 'advantageController'

  })
  .when('/bandmans', {

    templateUrl: 'bandmans.html',
    controller: 'bandmansController'

  })
  .when('/freecode', {

    templateUrl: 'freecode.html',
    controller: 'freecodeController'

  })
  .when('/business', {

    templateUrl: 'business.html',
    controller: 'businessController'

  })
  .when('/gaming', {

    templateUrl: 'gaming.html',
    controller: 'gamingController'

  })
  .when('/fishing', {

    templateUrl: 'fishing.html',
    controller: 'fishingController'

  })
  .when('/coverletter', {

    templateUrl: 'coverletter.html',
    controller: 'coverletterController'

  })
  .when('/udemy', {

    templateUrl: 'udemy.html',
    controller: 'udemyController'

  })
  .when('/codecademy', {

    templateUrl: 'codecademy.html',
    controller: 'codecademyController'

  })
  .when('/bootcamp', {

    templateUrl: 'bootcamp.html',
    controller: 'bootcampController'

  })
  .when('/khanacademy', {

    templateUrl: 'khanacademy.html',
    controller: 'khanacademyController'

  })

  .otherwise({redirectTo:'/'});

});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log){



}]);


myApp.controller('advantageController', ['$scope', '$log', function($scope, $log){



}]);

myApp.controller('bandmansController', ['$scope', '$log', function($scope, $log){



}]);

myApp.controller('freecodeController', ['$scope', '$log', function($scope, $log){



}]);
myApp.controller('businessController', ['$scope', '$log', function($scope, $log){



}]);
myApp.controller('gamingController', ['$scope', '$log', function($scope, $log){



}]);
myApp.controller('fishingController', ['$scope', '$log', function($scope, $log){



}]);
myApp.controller('coverletterController', ['$scope', '$log', function($scope, $log){



}]);
myApp.controller('udemyController', ['$scope', '$log', function($scope, $log){



}]);
myApp.controller('codecademyController', ['$scope', '$log', function($scope, $log){



}]);
myApp.controller('bootcampController', ['$scope', '$log', function($scope, $log){



}]);
myApp.controller('khanacademyController', ['$scope', '$log', function($scope, $log){



}]);
