"use strict";

angular.module("hiveBitcoinstoreApp")
    .controller("CategoryListCtrl", function ($scope, $rootScope, config, mapper) {
        var client = new MagentoSoapClient(config.storeUrl);

        $rootScope.categories = [];

        client.login(config.storeUsername, config.storePassword).done(function () {
            client.categoryLevel(config.storeRootCategoryId).done(function (categories) {
                _.each(categories, function (item) {
                    $rootScope.categories.push(mapper.build(item));
                });
                $rootScope.$apply();
            });
        });
    });
