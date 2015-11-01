function ftToolbar () {
    return {
        templateUrl: 'ftToolbar.html',
        restrict: 'E'        
    };
}

function ftOverflowMenu () {
    return {
        templateUrl: 'ftOverflowMenu.html',
        restrict: 'E'        
    };
}

angular.module( 'fog-timez', ['ngMaterial'])
    .directive("ftOverflowMenu", ftOverflowMenu)
    .directive("ftToolbar", ftToolbar);