$(document).ready(function() {
  console.log("jQuery ready");

  var pastryShop = {

        // ======== Initialize App ========
        initialize: function() {
            var self = this;
            // self.setCookie();
            self.activateLoginButton();
            self.activateLogoutButton();
            self.placeOrder();
            self.clearCookiesButton();
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
                Cookies.set('password', "");
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
                // alert("Welcome back " + username)
            } else {
                alert("Please enter your username and password");
            };
        },
        // ======= Cart =======
        updateOrder: function() {
            console.log("== updateOrder ==");
            var self = this;
            var brownies = $('#browniesQuantity').val();
            // console.log("brownies:", brownies);
            var cookies = $('#cookiesQuantity').val();
            var cupcakes = $('#cupcakesQuantity').val();

            if (Cookies.get("brownies")) {
                var brownies = parseInt(Cookies.get("brownies")) + parseInt(brownies);
            }
            Cookies.set("brownies", brownies);
            $('#browniesHistory').html(brownies);


            if (Cookies.get("cookies")) {
                var cookies = parseInt(Cookies.get("cookies")) + parseInt(cookies);
            }
            Cookies.set("cookies", cookies);
            $('#cookiesHistory').html(cookies);


            if (Cookies.get("cupcakes")) {
                var cupcakes = parseInt(Cookies.get("cupcakes")) + parseInt(cupcakes);
            }
            Cookies.set("cupcakes", cupcakes);
            $('#cupcakesHistory').html(cupcakes);
        },
        // ======= Order Submit ======
        placeOrder: function() {
            var self = this;
            var username = $('#username').val();
            var password = $('#password').val();
            console.log("== placeOrder ==");
            $('#placeOrder').on('click', function() {
                console.log('-- placeOrder --');
                // if (username && password == "") {
                //     alert("Please login to submit order ")
                // };
                self.updateOrder();
            });
        },
        // ======= Clear Cookies Button =======
        clearCookiesButton: function() {
            var self= this;
            console.log("== clearCookiesButton ==");
            $('#clearCookies').on('click', function () {
                console.log('-- clearCookies --');
                Cookies.set('brownies', 0);
                Cookies.set('cookies', 0);
                Cookies.set('cupcakes', 0);
                console.log(document.cookie);
            });
        }

  }; // CLOSE pastryShops

  pastryShop.initialize();

}); // CLOSE jQuery
