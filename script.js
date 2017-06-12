$(document).ready(function() {
  console.log("jQuery ready");

  var pastryShop = {

        // ======== Initialize App ========
        initialize: function() {
            var self = this;
            // self.setCookie();
            self.activateLoginButton();
            self.activateLogoutButton();
        },
        // ========= Enable Login ========
        activateLoginButton: function() {
            var self = this;
            console.log("== loginButton ==");
            $('#login').on('click', function(e){
                console.log('-- login --');
                self.loginUser();
            })
        },
        // ========= Enable Logout ========
            activateLogoutButton: function() {
                var self = this;
                console.log("== logoutButton ==");
                $('#logout').on('click', function(e){
                    console.log('-- logout --');
                    Cookies.set('username', "");
                    Cookies.set('password:', "");
                    console.log(document.cookie);
                })
            },
        // ====== Login Method =======
        loginUser: function() {
            var self = this;
            var username = $('#username').val();
            var password = $('#password').val();
            Cookies.set('username:', username);
            Cookies.set('password:', password);
            console.log(document.cookie);
            if (username && password != "") {
                alert("Welcome back " + username)
            } else {
                alert("Please enter your username and password");
            };
        },
        // ======= Order Invoice ======
        placePastryOrder: function() {
            
        }

  }; // CLOSE pastryShops

  pastryShop.initialize();

}); // CLOSE jQuery
