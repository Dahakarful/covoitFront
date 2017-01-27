myapp.factory('utilisateurFactory', function($http){
   
//    var baseUrl="http://utilisateur.cleverapps.io/accueil";
    var baseUrl="http://localhost:8081";
    
    return{
        getUtilisateur: function(){
            return $http.get(baseUrl);
        },
        addUtilisateur: function(nom, prenom, email){
            return $http({
                method: 'POST',
                url: baseUrl+'/utilisateur',
                data: 'nom='+nom+'&prenom='+prenom+'&email='+email,
                headers: {'Content-type': 'application/x-www-form-urlencoded'}
                //authorization + token
            });
        }
//        deleteBeers: function(id){
//            return $http({
//                method: 'DELETE',
//                url: baseUrl+'/'+id
//            });
//        }
    }
});