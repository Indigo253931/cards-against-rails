angular.module('CardsAgainstRails')
  .directive('wdiCard', wdiCard);

function wdiCard(){
  var directive = {};

  directive.restrict = 'E';
  directive.replace = true;
  directive.templateUrl =  "_wdiCard.html";
  directive.scope = {
      question: '@'
  };
  return directive;
}