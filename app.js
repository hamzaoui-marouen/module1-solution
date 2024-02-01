(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchItems = "";
        $scope.message = "";
        $scope.checkLunch = function () {
            var items = $scope.lunchItems.split(',');
            var nonEmptyItemCount = 0;

            for (var i = 0; i < items.length; i++) {
                if (items[i].trim() !== "") {
                    nonEmptyItemCount++;
                }
            }
            if(nonEmptyItemCount==0){
                $scope.message = "Empty";
            } else
            if ($scope.lunchItems === "") {
                $scope.message = "Please enter data first";
            } else if (nonEmptyItemCount <= 3) {
                $scope.message = "Enjoy!";
            } else {
                $scope.message = "Too much!";
            }
        };
    }
})();
