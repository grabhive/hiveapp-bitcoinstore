'use strict';

var App = angular.module('hiveBitcoinstoreApp', [
    'btcstore.filters',
    'btcstore.controllers',
    'envConfig'
]);

App.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/category-list.html',
            controller: 'CategoryListCtrl'
        })
        .when('/categories/:categoryId/products', {
            templateUrl: 'views/product-list.html',
            controller: 'ProductListCtrl'
        })
        .when('/categories/:categoryId/products/:productId', {
            templateUrl: 'views/product-detail.html',
            controller: 'ProductDetailCtrl'
        })
        .when('/checkout', {
            templateUrl: 'views/checkout.html',
            controller: 'CheckoutCtrl'
        })
        .when('/orders/:orderId', {
            templateUrl: 'views/order-summary.html',
            controller: 'OrderSummaryCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    });


App.run(function ($rootScope) {
    $rootScope.errorHandler = function (response, status, error) {
        $rootScope.btcStoreServerError = error;
        $rootScope.$apply();
    };
});

angular.module('btcstore.controllers', []);
