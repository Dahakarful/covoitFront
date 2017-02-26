//---------------------------------------------------------------------------------------------------------
myapp.controller('utilisateurController', function($scope, utilisateurFactory, $state, $mdToast, $cookies){
    
    $scope.utilisateur = [];
    
    $scope.goSignup = function(){
        $state.go('senregistrer');
    };
    
    $scope.connexion = function() {
        var token = $cookies.get('token');
        utilisateurFactory.connexion($scope.email, $scope.motDePasse, token)
            .then(function success(response){
                console.log("Success: " + response.data);
                if(response.data != "notConnect"){
                    $cookies.put('token', response.data);
                    $cookies.put('email', $scope.email);
                }
                $scope.getUtilisateur();
                $state.go('annonces');
                $mdToast.show(
                  $mdToast.simple()
                    .textContent('Connecté !')
                    .position('bottom')
                    .hideDelay(3000)
                );
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
    
    $scope.getUtilisateur = function() {
        var email = $cookies.get('email');
        console.log(email);
        utilisateurFactory.getUtilisateur(email).then(
            function success(response){
                console.log(response.data);
                $scope.utilisateur = response.data;
            }, function error(response){
                
            });
    }
});
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
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
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
myapp.controller('annoncesController', function(annoncesFactory, utilisateurFactory, $scope, $state, $mdToast, $state, $cookies){
    
    // Date courante pour le datePicker
    $scope.minDate = new Date();
    // Initialistion de la liste des annonces
    $scope.annonces = [];
    
    
    // Ajouter une annonce
    $scope.ajouterAnnonce = function() {
        var email = $cookies.get('email');
        annoncesFactory.ajouterAnnonce(email, $scope.villeDepart, $scope.villeArrivee, 
                                      $scope.nbPlaces, $scope.prix, $scope.dateDepart.toISOString())
            .then(function success(response){
                console.log("Annonce ajoutée");
                $scope.annonces.push(response.data);
                console.log($scope.annonces);
                $state.go('annonces');
                $mdToast.show(
                      $mdToast.simple()
                        .textContent('Annonce ajoutée !')
                        .position('bottom')
                        .hideDelay(3000)
                    );
            
        }, function error(response){
            console.log("Probleme ajout annonce");
        });
    };
    
    // Verifier si l'utilisateur est toujours connecté (verifier l'expiration du token)
    $scope.verifierConnexion = function(){
        var token = $cookies.get('token');
        annoncesFactory.verifierConnexion(token)
            .then(function success(response){
                $scope.ajouterAnnonce(token);
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
    
    // Redirection vers le formulaire d'ajout d'une annonce
    $scope.formulaireAnnonce = function(){
      $state.go('formulaireAnnonce');  
    };
    
    // La liste des annonces à afficher
    $scope.listAnnonces = function(){
      annoncesFactory.listAnnonces()
        .then(function success(response){
          console.log(response);
          $scope.annonces = response.data;
      }, function error(response){
          console.log(response);
      });  
    };
    
    $scope.listAnnonces();
});
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
