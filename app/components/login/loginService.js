app.factory('LoginManager', ['$http', 'LOGIN_CONST', 'API_URL', '$localStorage',
    function($http, LOGIN_CONST, API_URL, $localStorage) {
        function LoginManager() {
        };

        LoginManager.prototype = {
            getToken: function(){
              return $localStorage.token;
            },
            logOut: function(){
              assignTokenToStorage("");
            },
            logIn: function(username, password) {
                var scope = this;
                var token = getToken(username, password);
                assignTokenToStorage(token);

                return $http.get(API_URL.END_POINT_URL + 'api/login')
                    .then(function(data) {
                            return data;
                        },
                        function(error) {
                            assignTokenToStorage("");
                            throw error;
                        });
            }
        };

        function assignTokenToStorage(token){
          $localStorage.token = token;
          $localStorage.$apply();
        }

        function joinByColon() {
            return Array.prototype.join.call(arguments, ":");
        }

        function getToken(username, password) {
            var userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36"
            var ip = "::1"; // localhost
            var ticks = 633896886277130000;
            var key = LOGIN_CONST.SALT;
            var message = joinByColon(password, key);
            var hmacHashSaltedPassword = CryptoJS.HmacSHA256(message, key);
            hmacHashSaltedPassword = CryptoJS.enc.Base64.stringify(hmacHashSaltedPassword);

            key = hmacHashSaltedPassword;
            message = joinByColon(username, ip, userAgent, ticks);

            var hmacHashTokenLeft = CryptoJS.HmacSHA256(message, key);
            hmacHashTokenLeft = CryptoJS.enc.Base64.stringify(hmacHashTokenLeft);

            var hmacHashTokenRight = joinByColon(username, ticks);
            var hmacHashToken = joinByColon(hmacHashTokenLeft, hmacHashTokenRight);
            hmacHashToken = CryptoJS.enc.Utf8.parse(hmacHashToken);
            hmacHashToken = CryptoJS.enc.Base64.stringify(hmacHashToken);

            return hmacHashToken;
        }

        return LoginManager;
    }
]);
