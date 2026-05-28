var module;
try {
  module = angular.module('bonitasoft.ui.fragments');
} catch (e) {
  module = angular.module('bonitasoft.ui.fragments', []);
  angular.module('bonitasoft.ui').requires.push('bonitasoft.ui.fragments');
}
module.directive('pbFragmentIngresarSolicitudVacaciones', function() {
  return {
    template: '<div>    <div class="row">\n        <div pb-property-values=\'5fda9352-5d5f-4b03-9c9c-324f9e565c93\'>\n    <div pb-model=\'nuevaSolicitudVacacionesFragmento\' pb-model-properties=\'5fda9352-5d5f-4b03-9c9c-324f9e565c93\'>\n        <pb-fragment-nueva-solicitud-vacaciones-fragmento class="col-xs-12  col-sm-12  col-md-12  col-lg-12" ng-class="properties.cssClasses" ng-if="!properties.hidden">\n        </pb-fragment-nueva-solicitud-vacaciones-fragmento>\n    </div>\n</div>\n\n    </div>\n</div>'
  };
});
