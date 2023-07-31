'use strict';

var app = angular.module('myFirstApp', []);
app.controller('MyFirstController', function ($scope) {
    $scope.name = 'Rodrigo';
    $scope.sayHello = function () {
        return 'Hello there';
    }
});