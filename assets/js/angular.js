var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(function ($routeProvider) {


  $routeProvider

  .when('/', {

    templateUrl: 'main.html',
    controller: 'mainController'

  })
  .when('/menu/:menu', {

    templateUrl: 'main.html',
    controller: 'menuController'

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

$scope.statement = window.outerWidth;

if ($scope.statement <= 600) {

  $scope.type = "phone";
  $log.log($scope.type);
}
else {

  $scope.type = "computer";
  $log.log($scope.type);
}

}]);

myApp.controller('advantageController', ['$scope', '$log', function($scope, $log){

  $scope.statement = window.outerWidth;

  if ($scope.statement <= 600) {

    $scope.deviceWide = false;
  }
  else {

    $scope.deviceWide = true;
  }


}]);

myApp.controller('bandmansController', ['$scope', '$log', function($scope, $log){

  $scope.statement = window.outerWidth;

  if ($scope.statement <= 600) {

    $scope.deviceWide = false;
  }
  else {

    $scope.deviceWide = true;
  }


}]);

myApp.controller('freecodeController', ['$scope', '$log', function($scope, $log){

  $scope.statement = window.outerWidth;

  if ($scope.statement <= 600) {

    $scope.deviceWide = false;
  }
  else {

    $scope.deviceWide = true;
  }

}]);
myApp.controller('businessController', ['$scope', '$log', function($scope, $log){

  $scope.statement = window.outerWidth;

  if ($scope.statement <= 600) {

    $scope.deviceWide = false;
  }
  else {

    $scope.deviceWide = true;
  }

}]);
myApp.controller('gamingController', ['$scope', '$log', function($scope, $log){

  $scope.statement = window.outerWidth;

  if ($scope.statement <= 600) {

    $scope.deviceWide = false;
  }
  else {

    $scope.deviceWide = true;
  }

}]);
myApp.controller('fishingController', ['$scope', '$log', function($scope, $log){

  $scope.statement = window.outerWidth;

  if ($scope.statement <= 600) {

    $scope.deviceWide = false;
  }
  else {

    $scope.deviceWide = true;
  }

}]);
myApp.controller('coverletterController', ['$scope', '$log', function($scope, $log){

  $scope.statement = window.outerWidth;

  if ($scope.statement <= 600) {

    $scope.deviceWide = false;
  }
  else {

    $scope.deviceWide = true;
  }

}]);
myApp.controller('udemyController', ['$scope', '$log', function($scope, $log){

  $scope.statement = window.outerWidth;

  if ($scope.statement <= 600) {

    $scope.deviceWide = false;
  }
  else {

    $scope.deviceWide = true;
  }

}]);
myApp.controller('codecademyController', ['$scope', '$log', function($scope, $log){

  $scope.statement = window.outerWidth;

  if ($scope.statement <= 600) {

    $scope.deviceWide = false;
  }
  else {

    $scope.deviceWide = true;
  }

}]);
myApp.controller('bootcampController', ['$scope', '$log', function($scope, $log){

  $scope.statement = window.outerWidth;

  if ($scope.statement <= 600) {

    $scope.deviceWide = false;
  }
  else {

    $scope.deviceWide = true;
  }

}]);
myApp.controller('khanacademyController', ['$scope', '$log', function($scope, $log){

  $scope.statement = window.outerWidth;

  if ($scope.statement <= 600) {

    $scope.deviceWide = false;
  }
  else {

    $scope.deviceWide = true;
  }


}]);
