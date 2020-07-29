(function(window){
  var byespeaker = {};
  var speakword = "bye";
  byespeaker.speak = function(name){
    console.log(speakword +" "+ name);
  }
  window.byespeaker = byespeaker;
})(window);