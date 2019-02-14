myapp.controller('messageController',['$scope','$rootScope',function ($scope,$rootScope) {
    $scope.messages = $rootScope.messages;
    console.log( $scope.messages);

    }
]);


myapp.directive('messageItem',function () {
    return{
        scope:{  message:"@",
                 index:'@'
        },
        template:`
<a ng-class="(message1.important>0)?'important':''" style="display: block;" class="col-12" ng-click="showdetail()" >
          <div class="row" style="border: 2px solid skyblue;box-shadow: 3px 2px 10px 3px gray;margin-top: 10px" >
          
            <div class="col-5">
          <div class="card" style="width: 23rem;">
          <img class="card-img-top" src="{{message1.recipient_img}}" alt="User1 image"/>
          <div class="card-img-overlay">
           <h4 class="card-title">{{message1.created_at}}</h4>
          <p class="card-text">{{message1.recipient}}</p>
</div>
         
          
</div>
</div>
<div class="col-5 offset-2">
<div class="card" style="width: 23rem;">
<img class="card-img-top" src="{{message1.sender_img}}" alt="User2 image" />
<div class="card-img-overlay">
<h4 class="card-title">{{message1.created_at}}</h4>
<p class="card-text">{{message1.sender}}</p>
</div>

</div>
</div>

        
</div>  
</a>
`,
        controller:function ($scope,$rootScope, $location) {
            // $scope.$apply(function () {
            //     $scope.message = JSON.parse($scope.message);
            // });
            $scope.isshowclass = false;
            $scope.message1 = JSON.parse($scope.message);
            // if($scope.message1.important!=0){
            //    $scope.isshowclass =true;
            // }
            $scope.showdetail = function () {
                alert($scope.index);
                console.log($scope.index);
               $location.path('/show/'+$scope.index+'/detail');
                //$location.path('profile');

                //console.log($scope.message1.sender);

            }
        }
    }
});