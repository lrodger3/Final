angular.module("M34S", ['ngRoute'])
       .config(ngRouter);

ngRouter.$inject = ['$routeProvider', '$locationProvider'];

function ngRouter ($routeProvider, $locationProvider) {
$locationProvider.hashPrefix('');
$routeProvider.otherwise('/');

$routeProvider
  .when('/', {
    templateUrl : '/html/home.html',
    controller : 'TheMix',
    controllerAs : 'mixCtrller'
  })
  .when('/makemix', {
    templateUrl : '/html/makemix.html',
    controller : 'TheMix',
    controllerAs : 'mixCtrller'
  })
  .when('/mixer', {
    templateUrl : '/html/mixer.html',
    controller : 'mixCtrl',
    controllerAs : 'mix'
  })
  .when('/done', {
    templateUrl : '/html/done.html',
    controller : 'mixCtrl',
    controllerAs : 'mix'
  })
  // .when('/thm', {
  //   templateUrl : '/html/indexTHM.html',
  //   controller : 'TheMix',
  //   controllerAs : 'mixCtrller'
  // })
}
