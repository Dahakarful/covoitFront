myapp.factory('utilisateurFactory', function($http){
   
    var baseUrl="http://covoitUtilisateurs.cleverapps.io/";
//    var baseUrl="http://localhost:8081";
    
    return{
        getUtilisateur: function(email){
            return $http({
                method: 'POST',
                url: baseUrl + '/utilisateur',
                data: 'email=' + email,
                headers: {'Content-type': 'application/x-www-form-urlencoded'}
            });
        },
        addUtilisateur: function(nom, prenom, email, motDePasse){
            return $http({
                method: 'POST',
                url: baseUrl+'/senregistrer',
                data: 'nom='+nom+'&prenom='+prenom+'&email='+email+'&motDePasse='+motDePasse,
                headers: {'Content-type': 'application/x-www-form-urlencoded'}
            });
        },
        connexion: function(email, motDePasse, token){
            return $http({
                method: 'POST',
                url: baseUrl+'/connexion',
                data: 'email='+email+'&motDePasse='+motDePasse,
                headers: {'Content-type': 'application/x-www-form-urlencoded',
                         'Authorization': token}
            })
        }
    }
});


myapp.factory('annoncesFactory', function($http){
    
    var baseUrl="http://covoitAnnonces.cleverapps.io/";
//    var baseUrl = "http://localhost:8083";
    
    return{
        verifierConnexion: function(token){
            return $http({
               method: 'GET',
                url: baseUrl + '/verifierConnexion',
                headers: {'Content-type': 'application/x-www-form-urlencoded',
                         'Authorization': token}
            });
        },
        ajouterAnnonce: function(email, villeDepart, villeArrivee, nbPlaces, prix, dateDepart){
            return $http({
                method: 'POST',
                url: baseUrl + '/ajouterAnnonce',
                headers: {'Content-type': 'application/x-www-form-urlencoded'},
                data: 'proprietaire=' + email + '&villeDepart=' + villeDepart + '&villeArrivee=' + villeArrivee +
                    '&nbPlaces=' + nbPlaces + '&prix=' + prix + '&dateDepart=' + dateDepart
            });
        },
        listAnnonces: function(){
            return $http({
                method: 'GET',
                url: baseUrl + '/listAnnonces',
                headers: {'Content-type': 'application/x-www-form-urlencoded'}
            });
        },
        reserver: function(annonce, email){
            console.log(annonce);
            return $http({
                method: 'POST',
                url: baseUrl + '/reserver',
                headers: {'Content-type': 'application/x-www-form-urlencoded'},
                data: 'reservation=' + email 
                + '&proprietaire=' + annonce.proprietaire.email
                + '&villeDepart=' + annonce.villeDepart
                + '&villeArrivee=' + annonce.villeArrivee
                + '&dateDepart=' + annonce.dateDepart
            })
        }
    }
});