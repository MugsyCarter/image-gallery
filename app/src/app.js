import angular from 'angular';
import './css/main.css';
import components from './components';
import services from './services';

const app = angular.module('app', [components, services]);

const dev = 'http://localhost:3500/api';
// const prod = '/api/';

// .value gives the service "object" directly to angular
// goat.value('apiUrl', dev);

// above is same as:
app.factory('apiUrl', function() {
	return dev;
});
