app.controller("TranslateController", function($translate, $scope, TranslateService) {
  var _languages =[
    {
      Id: 'en',
      Label: 'English'
    },
    {
      Id: 'es',
      Label: 'Español'
    }
  ];

  var _selectedLanguage = TranslateService.getCurrentLanguage() || _languages[0];

  function ChangeLanguage(selectedLanguage) {
      $translate.use(selectedLanguage.Id);
      $scope.language = selectedLanguage.Id;
      TranslateService.setCurrentLanguage(selectedLanguage);
  };

  angular.extend($scope,{
      changeLanguage: ChangeLanguage,
      languages: _languages,
      selectedLanguage: _selectedLanguage
    }
  );



});
