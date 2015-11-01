function ftToolbarDirective () {
    return {
        templateUrl: 'ftToolbar.html',
        restrict: 'E'        
    };
}

function ftOverflowMenuDirective () {
    return {
        templateUrl: 'ftOverflowMenu.html',
        restrict: 'E'        
    };
}

function ftNavDirective () {
    return {
        templateUrl: 'ftNav.html',
        restrict: 'E'        
    };
}

function ftDirective (ftMenuService) {
    return {
        templateUrl: 'ft.html',
        restrict: 'E',
        scope: true,
        controller: function ($scope) {
            $scope.openNav = function () {
                ftMenuService.requestOpen();
            };
            
            $scope.closeNav = function () {
                ftMenuService.requestClose();
            };
        }        
    };
}

function ftMenuService ($mdSidenav) {
    var componentId = 'menu';
    
    function open() {
        $mdSidenav(componentId).open();
    }
    
    function close() {
        $mdSidenav(componentId).close();
    }
    
    return {
        requestOpen: open,
        requestClose: close,
    }
}

angular.module( 'fog-timez', ['ngMaterial'])
    .factory("ftMenuService", ['$mdSidenav', ftMenuService])
    .directive("ft", ['ftMenuService', ftDirective])
    .directive("ftNav", ftNavDirective)
    .directive("ftOverflowMenu", ftOverflowMenuDirective)
    .directive("ftToolbar", ftToolbarDirective);