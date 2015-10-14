angular.module('app.directives.nameCard', [])
  .directive('nameCard', function() {
    return {
      restrict: 'E',
      controller: function($scope){

      },
      templateUrl: "/templates/namecard.html"
    }
  })

console.log("Sane.");
