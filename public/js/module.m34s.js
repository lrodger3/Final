angular.module("M34S", ['ngRoute']);

.config(ngRouter)

ngRouter.$inject = ['$routeProvider', '$locationProvider'];

function ngRouter ($routeProvider, $locationProvider) {
$locationProvider.hashPrefix('');
$routeProvider.otherwise('/');

$routeProvider
  .when('/', {
    templateUrl : '/html/index.html',
    controller : 'TheMix',
    controllerAs : 'mixCtrller'
  })
  .when('/login', {
    templateUrl : '/html/makemix.html',
    controller : 'TheMix',
    controllerAs : 'mixCtrller'
  })
  .when('/dash', {
    templateUrl : '/html/mixdash.html',
    controller : 'mixCtrl',
    controllerAs : 'mix'
  })

}
