var myapp = angular.module('covoitVoiture', ['ui.router']);

myapp.config(
    function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/');
    
   var uilisateurState = {
       name: 'utilisateur',
       url: '/utilisateur',
       controller: 'utilisateurController',
       templateUrl: '../html/accueil.html'
   };
       var defaultState = {
       name: 'defaultState',
       url: '/',
       controller: 'utilisateurController',
       templateUrl: '../html/accueil.html'
   };
//   var addState = {
//       name: 'add',
//       url: '/add',
//       controller: 'addController',
//       templateUrl: '../html/add.html'
//   };
//    var findState = {
//       name: 'find',
//       url: '/find',
//       controller: 'findController',
//       templateUrl: '../html/find.html'
//   };
            $stateProvider.state(defaultState);
            $stateProvider.state(uilisateurState);
    
//    $stateProvider.state(addState);
});