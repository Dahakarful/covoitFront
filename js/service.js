myapp.factory('utilisateurFactory', function($http){
   
    var baseUrl="http://utilisateur.cleverapps.io/utilisateur";
    
    return{
        getUtilisateur: function(){
            return $http.get(baseUrl);
        }
//        ,
//        addBeers: function(name, alcohol){
//            return $http({
//                method: 'POST',
//                url: baseUrl,
//                data: 'name='+name+'&alcohol='+alcohol,
//                headers: {'Content-type': 'application/x-www-form-urlencoded'}
//            });
//        },
//        deleteBeers: function(id){
//            return $http({
//                method: 'DELETE',
//                url: baseUrl+'/'+id
//            });
//        }
    }
});