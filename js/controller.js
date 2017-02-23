myapp.controller('utilisateurController', function($scope, utilisateurFactory, $state, $mdToast, $cookies){
    
    $scope.goSignup = function(){
        $state.go('senregistrer');
    };
    
    $scope.connexion = function() {
        var token = $cookies.get('token');
        utilisateurFactory.connexion($scope.email, $scope.motDePasse, token)
            .then(function success(response){
                console.log("Success: " + response.data);
                if(response.data != "connect" || response.data != "notConnect"){
                   $cookies.put('token', response.data);
                }
                $mdToast.show(
                  $mdToast.simple()
                    .textContent('Connecté !')
                    .position('bottom')
                    .hideDelay(3000)
                );
                $state.go('annonces');
        }, function error(res){
            console.log(token);
            console.log("Error: " + res.data);
            if(res.data === "notConnect"){
                $state.go('defaultState');
            }
                $mdToast.show(
                  $mdToast.simple()
                    .textContent('Non autorisé !')
                    .position('bottom')
                    .hideDelay(3000)
                );
        });
    }
});

myapp.controller('senregistrerController', function(annoncesFactory, $scope, utilisateurFactory, $state, $mdToast){
    
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

myapp.controller('annoncesController', function($scope, $state, $mdToast, $state){
    
    var imagePath = 'img/list/60.jpeg';
    
    $scope.todos = [
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
    ];
    
    $scope.ajouterAnnonce(){
        
    };
    
    $scope.verifierConnexion(){
        var token = $cookies.get('token');
        annoncesFactory.verifierConnexion(token)
            .then(function success(response){
                $scope.ajouterAnnonce();
        }, function error(response){
            $mdToast.show(
                  $mdToast.simple()
                    .textContent('Votre token a expiré !')
                    .position('bottom')
                    .hideDelay(3000)
                );
            $state.go('defaultState');
        })
    };
    
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
