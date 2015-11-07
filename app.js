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
        restrict: 'E',
        scope: true,
        controller: function ($scope) {
            $scope.name = 'Firstname Lastname';
            $scope.email = 'email@domainname.com';
            $scope.menu = {};
            $scope.menu.actions = [{
                action : '',
                title: 'Data Entry',
                icon: 'create'
                }];
                
            $scope.menu.management = [{
                action : '',
                title: 'Settings',
                icon: 'settings'
            }, {
                action : 'doSomething($event)',
                title: 'Logout',
                icon: 'exit_to_app'
            }];
        }          
    };
}

function ftDirective (ftMenuService) {
    return {
        templateUrl: 'ft.html',
        restrict: 'A',
        scope: true,
        controller: function ($scope) {
            $scope.openNav = function () {
                ftMenuService.requestOpen();
            };
            
            $scope.closeNav = function () {
                ftMenuService.requestClose();
            };
            
            $scope.dataEntry = true;
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

function ftSpeedDialDirective () {
    return {
        templateUrl: 'ftSpeedDial.html',
        restrict: 'E'        
    };
}

function ftDataEntryFormDirective () {
    return {
        templateUrl: 'ftDataEntryForm.html',
        restrict: 'E',
        scope: true,
        controller: function ($scope) {
            $scope.startDate = 'Tue, 3 nov 2015';
            $scope.endDate = 'Tue, 3 nov 2015';
            $scope.startTime = '15:30';
            $scope.endTime = '16:30';
            $scope.case = '12345 - My Desctions Case Name';
        }        
    };
}

function ftDataEntryToolbarDirective () {
    return {
        templateUrl: 'ftDataEntryToolbar.html',
        restrict: 'E'        
    };
}

function ftTodayDirective () {
    return {
        templateUrl: 'ftToday.html',
        restrict: 'E',
        scope: true,
        controller: function ($scope) {
            $scope.activity = [{
                    start: '08.00',
                    end: '09.00',
                    caseNumber: 12345,
                    caseTitle: 'my descript title 1'
                }, {
                    start: 10.00,
                    end: 11.40,
                    caseNumber: 15645,
                    caseTitle: 'my description'
                }, {
                    start: 11.40,
                    end: 12.00,
                    caseNumber: 12345,
                    caseTitle: 'my descript title 1'
                }, {
                    start: 13.00,
                    end: 18.00,
                    caseNumber: 19945,
                    caseTitle: 'my descript title 1 with something'
                }, {
                    start: 13.00,
                    end: 18.00,
                    caseNumber: 19945,
                    caseTitle: 'my descript title 1 with something'
                }, {
                    start: 13.00,
                    end: 18.00,
                    caseNumber: 19945,
                    caseTitle: 'my descript title 1 with something'
                }, {
                    start: 13.00,
                    end: 18.00,
                    caseNumber: 19945,
                    caseTitle: 'my descript title 1 with something'
                }, {
                    start: 13.00,
                    end: 18.00,
                    caseNumber: 19945,
                    caseTitle: 'my descript title 1 with something'
                },  {
                    start: 11.40,
                    end: 12.00,
                    caseNumber: 12345,
                    caseTitle: 'my descript title 1'
                }];
            
            $scope.timeLogged = 6.25;
            
            $scope.timeDue = 7;
        }       
    };
}

angular.module( 'fog-timez', ['ngMaterial'])
    .factory("ftMenuService", ['$mdSidenav', ftMenuService])
    .directive("ft", ['ftMenuService', ftDirective])
    .directive("ftNav", ftNavDirective)
    .directive("ftOverflowMenu", ftOverflowMenuDirective)
    .directive("ftSpeedDial", ftSpeedDialDirective)
    .directive("ftDataEntryForm", ftDataEntryFormDirective)
    .directive("ftDataEntryToolbar", ftDataEntryToolbarDirective)
    .directive("ftToday", ftTodayDirective)
    .directive("ftToolbar", ftToolbarDirective);