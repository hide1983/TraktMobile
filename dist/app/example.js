angular.module('example', [
  // Declare here all AngularJS dependencies that are shared by the example module.
  'supersonic'
]);

angular
  .module('example')
  .controller('LearnMoreController', function($scope, supersonic) {

    $scope.navbarTitle = "Learn More";

  });

/**
 * Created by leeroyployaert on 28/12/14.
 */
angular
    .module('login')
    .controller('LoginController', function($scope, supersonic) {

        $scope.navbarTitle = "Login";

    });

angular
  .module('example')
  .controller('SettingsController', function($scope, supersonic) {
    $scope.navbarTitle = "Settings";
  });
