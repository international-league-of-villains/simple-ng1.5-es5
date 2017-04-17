angular.module('oldNG1', []);
angular.module('oldNG1')
.directive('oldSelect', [function () {
  return {
    template: '<div>You have selected: {{currentSelection.name ? currentSelection.name : "nothing, yet..."}}</div><select ng-model="currentSelection" ng-options="option.name for option in options" placeholder="Please Choose"></select>',
    controller: ['$scope', function ($scope) {
      $scope.name = 'oldSelect'
      $scope.currentSelection;
      $scope.options = [{
        name:'option 1'
      }, {
        name:'option 2'
      }]
    }]
  };
}]);