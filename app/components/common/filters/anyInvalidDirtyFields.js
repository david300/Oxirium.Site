app.filter('anyInvalidDirtyFields', function () {
  return function(form) {
    var hasErrors = false;
    for(var prop in form.$error) {
      if(form.$error.hasOwnProperty(prop)) {
        form.$error[prop].forEach(function(error){
          if(error.$invalid && error.$dirty) {
            hasErrors = true;
          }
        });
      }
    }
    return hasErrors;
  };
});
