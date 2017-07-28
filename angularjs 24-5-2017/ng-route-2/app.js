
var app = angular.module('demoApp', ['ngRoute']);
angular.module('demoApp', ['ngRoute'])
    .service('UserService', function( $http ){
        this.getAllUsers = function() {
            return $http.get('https://jsonplaceholder.typicode.com/users');
        }
        this.getUserById = function( userId ) {
            return $http.get('https://jsonplaceholder.typicode.com/users/' + userId);
        }
    })
    .controller('UserCtrl', function( $scope, UserService ) {
        UserService.getAllUsers()
            .then(function( resp ){
                $scope.users = resp.data;
            });
    })
    .config(function( $routeProvider ){

        $routeProvider
            .when('/users', {
                templateUrl: 'views/users-tmpl.html',
                controller: 'UserCtrl'
            })
            .when('/users/:userId', {
                template: '<h1></h1><div><pre>{{user | json}}</pre></div>',
                controller: function( $scope, UserService, $routeParams ){
                    
                    var userId = $routeParams.userId;

                    UserService.getUserById( userId )
                        .then(function( resp ){
                            console.log('getUserById :', resp.data);
                            $scope.user = resp.data;
                        })
                }   
            })
    })