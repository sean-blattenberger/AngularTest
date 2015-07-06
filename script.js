'use strict';
var data = {
	"Feature/Engine": ["FF1","FF2","IE1","IE2","IE3","WK1","WK2","WK3","WK4","iOS1","iOS2"],
	"§exponentiation": ["Yes","Yes","No","No","No","No","No","No","No","No","No" ],
	"§function.sentc": ["No","No","No","No","No","No","No","No","No","No","No"  ],
	"§Object.observec": ["No","No","No","No","No","Yes","Yes","Yes","No","Yes","Yes"],
	"§Array.prototype.includesc": ["No","Yes","Partial","Yes","No","No","Partial","No","Yes","No","No"],
	"§SIMD": ["No","No","No","No","Yes","Yes","No","Yes","Partial","Partial","No"],
	"§trailing commas in function syntax": ["No","Yes","No","Yes","No","Partial","Partial","Yes","Partial","Partial","Yes"],
	"§async functions": ["No","Yes","Yes","Yes","No","Yes","No","No","Partial","0/2","Partial"  ],
	"§typed objectsc": ["No","No","Partial","No","No","No","No","No","No","No","No"],
	"§ArrayBuffer.transferc": ["No","No","No","No","Yes","Yes","Yes","Yes","No","No","No"],
	"§class decoratorsc": ["No","Yes","No","Partial","No","No","Partial","No","No","No","No"],
	"§async generatorsc": ["No","No","No","No","No","No","No","No","No","No","No"] ,
	"§object rest propertiesc": ["No","Yes","Yes","No","No","No","No","No","No","No","No"],
	"§object spread propertiesc": ["No","Yes","Yes","No","No","No","No","No","No","No","No"]
}


var app = angular.module('testApp', ["ngRoute"])
.config(function($routeProvider) {
	$routeProvider
		.when("/", {
		controller: "MainCtrl",
		templateUrl: "/index.html"
	})
		.when("/data", {
		controller: "DataCtrl",
		templateUrl: "/data.html"
	})
		.when("/table", {
		controller: "TableCtrl",
		templateUrl: "/table.html"
	})
})

.controller('MainCtrl', function($scope){
	$scope.mainInfo = data;
	console.log($scope.mainInfo);
	$scope.tableHeaders = Object.keys(data);
	$scope.tableRows = [];
	for (var i in data) {
		$scope.tableRows.push(data[i]);
	}
	console.log("rows:  " + $scope.tableRows + "headers:  " + $scope.tableHeaders);
	console.log($scope.tableRows[0])
})
//	.controller('DataCtrl', function($scope) {
//})
