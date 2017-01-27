myapp.factory('utilisateurFactory', function($http){
   
    var baseUrl="http://utilisateur.cleverapps.io/accueil";
    
    return{
        getUtilisateur: function(){
            return $http.get(baseUrl);
        },
        addUtilisateur: function(nom, prenom, email){
            return $http({
                method: 'POST',
                url: baseUrl,
                data: 'nom='+nom+'&prenom='+prenom'&email='+email,
                headers: {'Content-type': 'application/x-www-form-urlencoded'}
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