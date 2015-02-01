angular.module('hackApp.filters', [])
  .filter('categoryFilter', function () {
    return function (email) {
      console.log(email + ' email');
      var returned = '';

      if (email.form != undefined) {
        returned = 'Form';
      } else {
        returned = 'Personal';
      }

      return returned;
    };
  })
  .filter('receiptFilter', function () {
    return function (email) {
      return 'something';
    };
  });