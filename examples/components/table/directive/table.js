(function() {
  'use strict';

  angular
    .module('gsTable')
    .directive('gsTable', tableDirective);

  function tableDirective($timeout) {
    var directive = {
      link: link,
      templateUrl: 'components/table/templates/table.html',
      restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
      console.log('gsTable sendo usada.');

      // Aqui vai o código da diretiva
      if (!attrs.columns) throw 'Columns não informadas.';
      scope.columns = attrs.columns.split(',');
    }
  }
})();
