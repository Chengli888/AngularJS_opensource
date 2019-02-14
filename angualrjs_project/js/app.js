var myapp = angular.module('myapp',['ngRoute']);
myapp.config(function ($routeProvider) {
    $routeProvider.when('/',{
        templateUrl:'page/home/home.html',
        controller:'homeController'
    }).when('/profile',{
        template:`this is the profile page`
    }).when('/message',{
     templateUrl:'page/message/message.html',
        controller:'messageController',
    }).when('/loginout',{
        templateUrl:'page/message/logout.html',
        controller:'logoutController'
    }).when('/show/:id/detail',{
      templateUrl:'page/detail/detail.html',
        controller:'detailController'
    }).otherwise({
        redirectTo:'/'
    })
});

myapp.controller('my1Controller',['$rootScope','$scope','$timeout','myFactory','myService',function ($rootScope,$scope,$timeout,myFactory,myService) {

    myFactory.writeone();
    myService.writeone();
    // myService.log3();
    console.log(myService.vale(4));
    $rootScope.messages =[
        {
            recipient: "User 1",
            recipient_img: "./img/user.png",
            sender: "User 1",
            sender_img: "./img/logo.jpg",
            title: "This is a sample message to User 1.",
            description: "This is a sample description to the message which has the above title",
            created_at: "2017-01-19 09:45:00",
            important: "0"
        },
        {
            recipient:"User 2",
            recipient_img:"./img/user.png",
            sender:"User 2",
            sender_img:"./img/logo.jpg",
            title:"This is a sample message to User 1.",
            description:"This is a sample description to the message which has the above title",
            created_at:"2017-01-19 09:45:00",
            important:"0"
        },
        {
            recipient:"User 3",
            recipient_img:"./img/user.png",
            sender:"User 3",
            sender_img:"./img/logo.jpg",
            title:"This is a sample message to User 1.",
            description:"This is a sample description to the message which has the above title",
            created_at:"2017-01-19 09:45:00",
            important:"0"
        }

    ];
    // console.log('parent boardcast the object');
    // $timeout(function(){
    //     $scope.$broadcast('messages_dir',{messages:$rootScope.messages});
    // },3000);

}]);
myapp.directive('navDirective',function () {
    return {
        scope:{

        },
        template:`   <div class="row">
        <div class="col-12">
            <nav class="navbar navbar-expand-sm bg-light navbar-light justify-content-end">
                <ul class="nav">
                    <li class="nav-item"><a class="nav-link" href="#!/home">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#!/profile">Profile</a></li>
                    <li class="nav-item"><a class="nav-link" href="#!/message">Message</a></li>
                    <li class="nav-item"><a class="nav-link" href="#!/logout">Logout</a></li>
                </ul>
            </nav>
        </div>
    </div>`
    }
});
myapp.directive('org', function() { 
    return {         template : `             <p>Org name : {{org_name}}</p>             <user></user>         `, 
        link: {             pre: function(scope, elem, attr) {                 scope.org_name = 'Marlabs';             }         }     } });
  myapp.directive('user', function() {     return { 
    template: `         <p>Username is {{username}} and he works for {{org}}</p>         `, 
      link: function(scope, elem, attrs) {             scope.username = "Arungopan";             scope.org = scope.org_name;         }     } });

myapp.directive('myDirective', function($compile) {    
    return {     templateUrl:'template_file.html', 
        restrict:'EAC',      scope:{ 
           username:'@', 
            location:'=', 
            dirfn:'&'     }, 
        link:function(scope, elems, attrs)
        {       scope.scope_var = "Hello Arun here....!!!"; 
        document.querySelector('#abc').addEventListener('click', function() {         document.getElementById('abc_cntr').innerHTML = '<div>{{scope_var}}</div>'; 
        $compile(elems.contents())(scope);       });     }   };    });



myapp.service('myService',function () {

   this.writeone = function () {
       console.log('this is the myService');
   } ;
   this.vale = function (x) {
       return x;
   };
});

myapp.factory('myFactory',function (myService) {
    return{
        writeone:function () {
            // myService.prototype.log3 =function () {
            //   console.log('this is the log3');
            // };
        console.log('this is the myService');
    } ,
    vale: function (x) {
        return x;
    }
    }

});
// myapp.controller('Controller1', ['$scope', '$rootScope', function($scope, $rootScope){
//     $scope.broadcastAndEmit = function(){
//         // This will be seen by Controller 1 $scope and all children $scopes
//         $scope.$broadcast('eventX', {data: '$scope.broadcast'});
//
//         // Because this event is fired as an emit (goes up) on the $rootScope,
//         // only the $rootScope will see it
//         $rootScope.$emit('eventX', {data: '$rootScope.emit'});
//     };
//     $scope.emit = function(){
//         // Controller 1 $scope, and all parent $scopes (including $rootScope)
//         // will see this event
//         $scope.$emit('eventX', {data: '$scope.emit'});
//     };
//
//     $scope.$on('eventX', function(ev, args){
//         console.log('eventX found on Controller1 $scope');
//     });
//     $rootScope.$on('eventX', function(ev, args){
//         console.log('eventX found on $rootScope');
//     });
// }]);
// myapp.controller('Controller2', ['$scope','$rootScope', function($scope,$rootScope){
//     $scope.broadcast = function(){
//         $scope.$broadcast('messages_dir',{messages:$rootScope.messages});
//         $scope.$broadcast('eventX', {source: '$scope.broadcast2'});
//     };
//     $scope.emit = function(){
//         $scope.$emit('eventX', {source: '$scope.emit2'});
//     };
//
//     $scope.$on('eventX', function(ev, args){
//        console.log('Controller2 source: ' + args.source);
//     });
// }]);
//
// myapp.controller('Controller3', ['$scope', '$rootScope', function($scope, $rootScope){
//     $scope.broadcast = function(){
//         $scope.$broadcast('eventX', {source: '$scope.broadcast3'});
//     };
//     $scope.emit = function(){
//         $scope.$emit('eventX', {source: '$scope.emit3'});
//     };
//     $scope.broadcastRoot = function(){
//         $rootScope.$broadcast('eventX', {source: '$rootScope.broadcastRoot'});
//     };
//     $scope.emitRoot = function(){
//         $rootScope.$emit('eventX', {source: '$rootScope.emitRoot'});
//     };
//
//     $scope.$on('eventX', function(ev, args){
//         console.log('Controller3 source: ' + args.source);
//     });
//     $scope.$on('messages_dir',function (event,args) {
//         console.log(event);
//         console.log(args);
//     });
// }]);
