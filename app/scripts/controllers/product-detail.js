"use strict";

angular.module("hiveBitcoinstoreApp")
    .controller("ProductDetailCtrl", function ($scope, $rootScope, $routeParams, $location) {
        $scope.categoryId = $routeParams.categoryId;
        $scope.productId = $routeParams.productId;

        $scope.product = _.findWhere($rootScope.products, {product_id: $scope.productId});
        if (!$scope.product) {
            // TODO: fetch from API
            $location.path("/categories/" + $scope.categoryId + "/products");
        }

        $scope.buy = function (productId) {
            // TODO: handle payment
            $location.path("/categories/" + $scope.categoryId + "/products/" + $scope.productId + "/order-summary");
        };
    });
