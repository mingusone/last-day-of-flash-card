var app = angular.module('FlashCards', ['ui.router']);

app.config(function ($stateProvider){
	$stateProvider.state('main', {
		url:'/main',
		templateUrl: 'templates/main.html',
		controller: 'MainController'
	});

	$stateProvider.state('new', {
		url:'/new',
		templateUrl: 'templates/new.html',
		controller: 'NewCardController'
	});

	$stateProvider.state('stats', {
		url:'/stats',
		templateUrl: 'templates/stats.html',
		controller: 'StatsController'
	});


	$stateProvider.state('manage', {
		url:'/manage/:cardParam',
		templateUrl: 'templates/manage.html',
		controller: 'ManageCardController'
	}).state('edit', {
			url:'/manage/:cardParam',
			templateUrl: 'templates/edit.html',
			controller: 'ManageCardController'
		}).state('delete', {
			url:'/manage/:cardParam',
			templateUrl: 'templates/delete.html',
			controller: 'ManageCardController'
		})
})
