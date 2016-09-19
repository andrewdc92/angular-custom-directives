angular.module('CardsAgainstAssembly')
  .directive('rateController', rateController);

  function rateController(){
      var directive = {
        scope: {
          question: "@",
        },
        restrict: 'E',
        templateUrl: './templates/rateDirective.html';
        replace: true;
      };
      return directive;
  };
