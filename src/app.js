const angular = require('angular');
require('./main.css');

var app = angular.module('goat', []);

app.controller('moods', function($scope) {
	$scope.moods = ['furious', 'upset', 'peeved', 'neutral', 'pleased', 'happy', 'ecstatic'];
});
