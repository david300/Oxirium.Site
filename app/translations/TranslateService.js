app.factory('TranslateService', function() {
  var currentLanguage;

  function setCurrentLanguage(language){
    currentLanguage = language;
  }

  function getCurrentLanguage(){
    return currentLanguage;
  }

  return {
    getCurrentLanguage: getCurrentLanguage,
    setCurrentLanguage: setCurrentLanguage
  };
});
