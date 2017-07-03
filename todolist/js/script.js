/* -------------------------------------------------------------------------- */
/* Program:       script.js                                                   */
/* Author:        Michael Ruddock                                             */
/* Date:          3rd July 2017                                               */
/* Version:       1.0                                                         */
/* Assessment:    MWA #2                                                      */
/* Description:   The Controller of my MVC SPA                                */
/* N.B:           This has not be minimised so you can read it                */
/* -------------------------------------------------------------------------- */
angular.module('App', []).controller('CrudCtrl', ['$scope',
	function($scope) {
     /* initialisation */    
	 $scope.Profiles = [];	 
	 $scope.entity = {};

     /* EDIT */    
	 $scope.edit = function(index){
	   $scope.entity = $scope.Profiles[index];
	   $scope.entity.index = index;
	   $scope.entity.editable = true;
	 }
	    
     /* DELETE */
	 $scope.delete = function(index){
	   $scope.Profiles.splice(index,1);
	 }
	    
     /* SAVE */
	 $scope.save = function(index){
	   $scope.Profiles[index].editable = false;	   
	 }
	    
     /* ADD */
	 $scope.add = function(){
            
	   $scope.Profiles.push({
	    priority : "",
        description : "",
        editable : true
	   })
	 }
    
    /* Item Count */ 
    $scope.remaining = function () {
		var count = 0;
		angular.forEach($scope.Profiles, function (todo) {
			count += todo.done ? 0 : 1;
		});
		return count;
	}; 
	}
]);