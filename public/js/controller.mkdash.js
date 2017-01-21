angular.module('M34S')
  .controller('mixCtrl', mixCtrl);

mixCtrl.$inject = ["Auth","$location"];

function mixCtrl (Auth, $location) {
  var mix = this;
  mix.Auth = Auth;
  Auth.checkAuth()
      .then(function(returnData){
      console.log(returnData);

      if(!returnData.data){
        // kick them out
        $location.url('/'); // take them to angular home route
      }
      else{

        // User is logged in, set them in the service and fetch plylist data

        Auth.user = returnData.data // store in Auth service so we can access it anywhere we inject Auth
        // playlist.get()
        //   .then(function(returnData){
        //     // mix.****** = returnData.data
        // })
      }

    })
}
