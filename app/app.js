angular.module('oldNG1', []);

angular.module('oldNG1')
.directive('oldSelectWrapper', [function () {
    return {
      template: '<h3>ES5 Wrapping Component</h3><power-select first-names="$ctrl.firstNames" last-names="$ctrl.lastNames" callback="$ctrl.selection"></power-select>',
      controllerAs: '$ctrl',
      controller: [function () {
        this.firstNames = [
          { name: 'Doctor' },
          { name: 'The Black' },
          { name: 'The Red' },
          { name: 'The Creeping' },
          { name: 'Shadowy'},
          { name: 'Grimm'}, 
          { name: 'The Violent' },
          { name: 'The Dark' },
          { name: 'Unholy' },
          { name: 'Terrible' },
          { name: 'The Evil' }
        ];
        this.lastNames = [
          { name: 'Black' },
          { name: 'Hell' },
          { name: 'Creep' },
          { name: 'Terror' },
          { name: 'Darkness' },
          { name: 'Brood' },
          { name: 'Shadow' },
          { name: 'Evil' }
        ];
        this.selection = function (firstName, lastName) {
          console.log('the callback method got', firstName, lastName);
        }
      }]
    }
}])

angular.module('oldNG1')
.component('powerSelect', {
    bindings: {
      firstNames: '=',
      lastNames: '=',
      callback: '='
    },
    template: '<article>' +
              '<h4>Select Villan Name (ES5)</h4>' +
              '<select ng-model="$ctrl.firstName" ng-change="$ctrl.onSelect()" data-ng-options="firstName as firstName.name for firstName in $ctrl.firstNames">' +
                '<option value="">Pick one...</option>' +
              '</select>' +
              '<select ng-model="$ctrl.lastName" ng-change="$ctrl.onSelect()" data-ng-options="lastName as lastName.name for lastName in $ctrl.lastNames">' +
                '<option value="">Pick one...</option>' +
              '</select>' +
              '<span ng-if="$ctrl.firstName &&  $ctrl.lastName"> You selected selected the name: {{$ctrl.firstName.name}} {{$ctrl.lastName.name}}</span>' +
            '</article>',
    controller: ['$scope', function ($scope) {
      this.onSelect = function () {
        if (this.firstName && this.lastName) {
          this.callback(this.firstName, this.lastName);
        }
      };
    }]
  });