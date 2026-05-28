var module;
try {
  module = angular.module('bonitasoft.ui.fragments');
} catch (e) {
  module = angular.module('bonitasoft.ui.fragments', []);
  angular.module('bonitasoft.ui').requires.push('bonitasoft.ui.fragments');
}
module.directive('pbFragmentNuevaSolicitudVacacionesFragmento', function() {
  return {
    template: '<div>    <div class="row">\n        <div pb-property-values=\'51c214ec-c2fa-4960-ae4f-bfccdb9e4948\'>\n    <div ng-if="!properties.hidden" class="component col-xs-12  col-sm-12  col-md-12  col-lg-12" ng-class="properties.cssClasses">\n        <pb-date-picker></pb-date-picker>\n    </div>\n</div>\n    </div>\n    <div class="row">\n        <div pb-property-values=\'e92083b8-1c49-4e0a-8f75-74556703b874\'>\n    <div ng-if="!properties.hidden" class="component col-xs-12  col-sm-12  col-md-12  col-lg-12" ng-class="properties.cssClasses">\n        <pb-input></pb-input>\n    </div>\n</div>\n    </div>\n</div>'
  };
});
