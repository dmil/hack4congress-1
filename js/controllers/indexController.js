angular.module('hackApp.controllers')
  .controller('IndexController', ['$scope', '$http', '$timeout',
    function ($scope, $http, $timeout) {
      $scope.labels = [];
      $scope.data = [];
      $scope.currentFilter = null;
      $scope.emails = [];

      $scope.labelFilter = function (email) {
        if($scope.currentFilter) {
          if(email.category == $scope.currentFilter){
            return true;
          }

          return false;
        }

        return true;
      };

      $scope.chartOptions = {
        animateRotate: false
      };

      $http.get('/api/emails/index.json')
        .success(function (data) {
          //$scope.totalEmails = data.meta.total;
          $scope.totalEmails = 20;
          $scope.emails = data.objects;

          angular.forEach($scope.emails, function (email) {
            if(email.form){
              email.category = 'Form';
            } else {
              email.category = 'Personal';
            }

          });

          $http.get('/api/categories/index.json')
            .success(function (data) {
              angular.forEach(data.objects, function (category) {
                $scope.labels.push(category.name);
                $scope.data.push(category.count / $scope.totalEmails);
              });
            });
        });

      $scope.filterEmails = function (category) {
        $scope.currentFilter = category;
      };

      $scope.clearFilter = function () {
        $scope.currentFilter = null;
      };

    }]);