angular.module('hackApp.controllers')
  .controller('IndexController', ['$scope', '$http',
    function ($scope, $http) {
      $scope.labels = [];
      $scope.data = [];

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
    }]);