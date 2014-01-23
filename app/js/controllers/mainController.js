'use strict';

pokerApp.controller('MainController', function($scope, deckService)
{
    $scope.deck = deckService.deck;
});