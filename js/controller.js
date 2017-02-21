myapp.controller('utilisateurController', function($scope, utilisateurFactory, $state, $mdToast){
    
    $scope.goSignup = function(){
        $state.go('senregistrer');
    };
    
    $scope.connexion = function() {
        utilisateurFactory.connexion($scope.email, $scope.motDePasse)
            .then(function success(){
                $mdToast.show(
                  $mdToast.simple()
                    .textContent('Connecté !')
                    .position('bottom')
                    .hideDelay(3000)
                );
        }, function(){
                $mdToast.show(
                  $mdToast.simple()
                    .textContent('Non autorisé !')
                    .position('bottom')
                    .hideDelay(3000)
                );
        });
    }
});

myapp.controller('senregistrerController', function($scope, utilisateurFactory, $state, $mdToast){
    
    $scope.senregistrer = function(){
        utilisateurFactory.addUtilisateur($scope.nom, $scope.prenom, $scope.email, $scope.motDePasse)
            .then(function succes(response){
                console.log("Success called !");
                $scope.home();
        }, function error(response){
            console.log("Error called !");
        });
    }
    
    $scope.home = function(){
        $state.go("defaultState");
    }
});


//myapp.controller('addController', function($scope, beersFactory){
//    
//    $scope.submit = function(){
//        beersFactory.addBeers($scope.name, $scope.alcohol)
//            .then(function succes(response){
//                console.log("Success called !");
//        }, function error(response){
//            console.log("Error called !");
//        });
//    };
//});
