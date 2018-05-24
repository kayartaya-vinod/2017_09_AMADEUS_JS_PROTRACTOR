// register a new module "ab" with angular
var app = angular.module("ab", [ "ngRoute" ]);

app.config(function($routeProvider){

	$routeProvider
	.when("/", {
		template: "<h3>Welcome to addressbook app</h3>"
	})
	.when("/add", {
		template: "<h3>adding a new contact</h3>"
	})
	.when("/view-all", {
		templateUrl: "/templates/list.html",
		controller: "listCtrl"
	})
	.when("/get", {
		templateUrl: "/templates/get.html",
		controller: "getCtrl"
	})
	.otherwise({
		template: "<h3>404 - Page not found</h3>"
	});
});

var baseUrl = "/api/contacts/";

app.controller("listCtrl", function($scope, $http){
	$http.get(baseUrl)
	.then(function(resp){
		$scope.contactList = resp.data.contacts;
	});
});

app.controller("getCtrl", function($scope, $http){
	$scope.contact = {};
	$scope.pageCaption = "Search contact details by id";
	$scope.get = function(){
		$http.get(baseUrl+$scope.id)
		.then(function(resp){
			var d = resp.data;
			if(d.success==true){
				if(d.contact==null){
					alert("No data found for id : "+ $scope.id);
				}
				else {
					$scope.contact = d.contact;	
				}
			}
			else{
				$scope.contact = {};
				alert("There was an error!");
			}
		});
	};

	$scope.delete = function(){
		if(!$scope.contact.name){
			alert("Nothing to delete!");
			return;
		}

		if(confirm("Are you sure?")){
			$http.delete(baseUrl+$scope.id)
			.then(function(resp){
				var d = resp.data;
				if(d.success==true){
					alert(`Details of your contact '${d.contact.name}' deleted from the address book.`);
					$scope.id = undefined;
					$scope.contact = {};
				}
			});
		}
	};
});
