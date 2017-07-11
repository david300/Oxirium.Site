app.controller("RegisterCtrl", function(vcRecaptchaService, $scope) {
    $scope.registerUser = function() {
        var _registerData = $scope.register;
        if (!_registerData.captchaResponse) {
            alert("Please resolve the captcha and submit!");
        } else {
            alert(_registerData.captchaResponse);
        }
    }
});
