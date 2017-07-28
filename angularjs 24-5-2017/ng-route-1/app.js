

angular.module('demoApp', ['ngRoute'])
    .controller('CoursesCtrl', function() {
        this.courses = [
            'JavaScript', 'Angularjs', 'TypeScript', 'SASS', 'Gulp', 'Webpack'
        ];
    })
    .controller('AboutUsCtrl', function( $scope ) {
        $scope.about = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates officia sit illum repellat id architecto soluta autem dolore, et aliquam minima quibusdam quisquam magnam doloremque numquam! Ali magni';
    })
    .config(function( $routeProvider ){

        $routeProvider
            .when('/home', {
                template: '<h3>I am in home partial</h3>'
            })
            .when('/aboutUs', {
                templateUrl: 'views/about-us.html',
                controller: 'AboutUsCtrl'
            })
            .when('/contactUs', {
                template: '<h3>I am in {{tmplName}} partial</h3>',
                controller: function( $scope ) {
                    $scope.tmplName = 'Rajkeshwar Prasad';
                }
            })
            .when('/courses', {
                template: '\
                    <h3>Listing Courses</h3>\
                    <ul>\
                        <li ng-repeat="courseName in crs.courses">{{courseName}}</li>\
                    </ul>\
                ',
                controller: 'CoursesCtrl',
                controllerAs: 'crs'
            })

    })