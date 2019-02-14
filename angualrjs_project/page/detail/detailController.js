myapp.controller('detailController',['$rootScope','$scope','$routeParams','deletefactory','$location',function ($rootScope,$scope,$routeParams,deletefactory
,$location
) {
    console.log($rootScope.messages);
    $scope.isshowmsg = false;
    let id =parseInt($routeParams.id);
    $scope.message1 = $rootScope.messages[id];
    $scope.Reply= function () {
        $scope.isshowmsg = true;
    };
    
    $scope.submit = function () {
        if($rootScope.messages[id].reply){
            $rootScope.messages[id].reply.push({remsg:$scope.remsg});

        }else {
            $rootScope.messages[id].reply=[];
            $rootScope.messages[id].reply.push({remsg:$scope.remsg});
        }

      $scope.isshowmsg = false;
        $scope.remsg ="";
    };
    $scope.delete= function () {
     $rootScope.messages = deletefactory.deleteit($rootScope.messages,id);
        //ms=[];
        //console.log($rootScope.messages+"origin---------");
        //$rootScope.messages.splice(id,1);
       // alert($rootScope.messages.length);
        $location.path('/message');
    }
    
    $scope.Mark = function () {
        $rootScope.messages[id].important = 1;
        console.log($rootScope.messages);

        $location.path('/message');
    }
}]);


myapp.factory('deletefactory',function () {
   
    return{

      deleteit:function (messages,index) {
        console.log(messages);
        messages.splice(index,1);
        return messages

    }
    }
});