var FB;

(function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/fr_FR/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


window.fbAsyncInit = function() {
    FB.init({
      appId      : '252318278532746',
      xfbml      : true,
      version    : 'v2.8'
    });
    FB.AppEvents.logPageView();
    
    var status = FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
};




//if(status != 'connected'){
//    FB.login(function(response) {
//      if (response.status === 'connected') {
//        // Logged into your app and Facebook.
//          console.log("Your are connected !");
//      } else if (response.status === 'not_authorized') {
//        // The person is logged into Facebook, but not your app.
//          console.log("Your are not authorized !");
//      } else {
//          console.log("You are not connected on any apps !");
//        // The person is not logged into Facebook, so we're not sure if
//        // they are logged into this app or not.
//      }
//    });
//}