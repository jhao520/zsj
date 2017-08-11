//指令
;
(function() {
	var filters = angular.module('filter', []);

	filters.filter("html", ["$sce", function($sce) {
		return function(input) {
			return $sce.trustAsHtml(input);
		}
	}]);

	filters.filter("wang", [function() {
		return function(input) {
			return input.split('=')[1].split('&')[0]

		}
	}])

	filters.filter("yang", [function() {
		return function(input) {
			return input.split('=')[1].split('&')[0]

		}
	}])

	filters.filter("hang", [function() {
		return function(input) {
			return input.split('=')[1].split('&')[0]

		}
	}])

	// 显示是个字
	filters.filter('ten', function() {
		return function(data) {
			return data.slice(0, 10)
		}
	})

})();