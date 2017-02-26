var myapp = angular.module('covoitVoiture', [
    'ui.router',
    'ngMaterial',
    'ngMessages',
    'ngCookies',
    'ngAria'
]);

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
    var senregistrerState = {
        name: 'senregistrer',
        url: '/senregistrer',
        controller: 'senregistrerController',
        templateUrl: '../html/senregistrer.html',
        data: {
              css: '../css/senregistrer.css'
        }
    };
    var annoncesState = {
        name: 'annonces',
        url: '/annonces',
        controller: 'annoncesController',
        templateUrl: '../html/annonces.html',
    };
    var formulaireAnnonceState = {
        name: 'formulaireAnnonce',
        url: '/formulaireAnnonce',
        controller: 'annoncesController',
        templateUrl: '../html/formulaireAnnonce.html'
    };
        $stateProvider.state(defaultState);
        $stateProvider.state(uilisateurState);
        $stateProvider.state(senregistrerState);
        $stateProvider.state(annoncesState);
        $stateProvider.state(formulaireAnnonceState);
});