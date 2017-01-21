angular.module('M34S')
       .service("Auth", auth);

auth.$inject = ['$http'];

function auth ($http) {

    this.checkAuth = function() {
    return $http.get('/api/me')
    }
}

// function authFact () {
//   function checkAuth () {

//   }

//   return {
//     checkAuth : checkAuth
//   }
// }
