myapp.controller('utilisateurController', function($scope, utilisateurFactory){
    
    $scope.utilisateur = [];
    $scope.error = null;
    console.log($scope.beers);
    
    var getUtilisateur = function(){
        utilisateurFactory.getUtilisateur()
            .then(function succes(response){
                console.log("Success called !");
                if(response.status == 200){
                    $scope.beers = response.data;
                }else{
                    $scope.error = 'Error happened'+response.status;
                }
            }, function error(response){
                console.log("Error called !");
                $scope.error = 'Error happened'+response.status;
        })
    };
    
    $scope.submit = function(){
        utilisateurFactory.addUtilisateur($scope.nom, $scope.prenom, $scope.email)
            .then(function succes(response){
                console.log("Success called !");
        }, function error(response){
            console.log("Error called !");
        });
    };
    
//    $scope.delete = function(id){
//        beersFactory.deleteBeers(id)
//        .then(function succes(response){
//                console.log("Success called !");
//                getBeers();
//        }, function error(response){
//            console.log("Error called !");
//        });
//    };
//    
//    getBeers();
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