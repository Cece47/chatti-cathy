$(function () {
  'use strict';

  $('form').submit(function(e) {
    e.preventDefault();

    var git-username= $('.gif').val();
    var git-url= "http://api.giphy.com" + username;

    var doneFunction=function(templateData){
      debugger
      _.templateSettings.variable = "m";
      var template = _.template(
        $( "script.template" ).html()
      );
      $( "li" ).after(
        template(templateData)
      );
      $('input[type="text"]').val("");
    }

    $.ajax( {url: url} ).done(doneFunction);

  })

});
