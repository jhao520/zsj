//路由
;
(function() {
	var route = angular.module('route', []);
	route.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.when("", "/index/home/list/pop");
		$stateProvider.state('index', {
				url: '/index',
				templateUrl: './template/index.html'
			}).state('index.home', {
				url: '/home',
				templateUrl: './template/route/home.html'
			}).state('index.home.list', {
				url: '/list/:sort',
				templateUrl: './template/route/xclist.html'
			}).state('index.category', {
				url: '/category',
				templateUrl: './template/route/category.html'
			}).state('index.filist', {
				url: '/filist',
				templateUrl: './template/filist.html'
			}).state('index.filist.pseek', {
				url: '/pseek/:sort/:title',
				templateUrl: './template/route/pseek.html'
			})

			.state('subCategory', {
				url: '/subCategory/:pid',
				templateUrl: './template/route/subcategory.html',
			})

			.state('login', {
				url: '/login',
				templateUrl: '',
			})

			.state('car', {
				url: '/car',
				templateUrl: './template/car.html',
			}).state('order', {
				url: '/order',
				templateUrl: './template/order.html',
			}).state('address', {
				url: '/address',
				templateUrl: './template/address.html',
			}).state('addaddress', {
				url: '/addaddress',
				templateUrl: './template/addaddress.html',
			})

			.state('reg', {
				url: '/reg',
				templateUrl: '',
			}).state('reg.step1', {
				url: '/step1',
				templateUrl: '',
			}).state('reg.step2', {
				url: '/step2/:phone',
				templateUrl: '',
			})

			.state('mycenter', {
				url: '/mycenter',
				templateUrl: '',
			})
			.state('mycollect', {
				url: '/mycollect',
				templateUrl: '',
			})

			.state('listed', {
				url: '/listed/:pcid',
				templateUrl: './template/listed.html',
			})

			.state('detail', {
				url: '/detail/:iid',
				templateUrl: './template/detail.html',
			})

			.state('listing', {
				url: '/listing/:pcid',
				templateUrl: '',
			})
	})
})();