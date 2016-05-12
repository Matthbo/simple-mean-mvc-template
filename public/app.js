var appName = '';
var app = angular.module(appName, ['ngResource', 'ui.router']);

angular.element(document).ready(function() {
	angular.bootstrap(document, [appName]);
});