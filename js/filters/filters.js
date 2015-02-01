angular.module('hackApp.filters', [])
  .filter('categoryFilter', function () {
    return function (email) {
      if(email.form) {
        return 'Form';
      }else {
        return 'Personal';
      }
    }
  });