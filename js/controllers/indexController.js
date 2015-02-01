angular.module('hackApp.controllers')
  .controller('IndexController', ['$scope', '$http',
    function ($scope, $http) {
      $scope.labels = [];
      $scope.data = [];
      $scope.currentFilter = null;
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

      $http.get('/api/emails')
        .success(function (data) {
          $scope.totalEmails = data.total;
          $scope.emails = data.emails;

          $http.get('/api/categories')
            .success(function (data) {
              angular.forEach(data, function (category) {
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