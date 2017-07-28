var app = angular.module('docsSimpleDirective',[])
app.controller('Controller',['$scope', function($scope){
 $scope.customer = {
 	name:'jeevan',
 	address:'4-52/1 mirdhapally'
 };
}])
.directive('myCustomer', function() {
	return{
		template:'Name:{{customer.name}} address:{{customer.address}}'
	};
});