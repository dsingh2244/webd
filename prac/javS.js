(function(window){
  var ls = ["dig","joe","moh","jid"];
  for(var i = 0; i<ls.length;i++){
    var nam = {};
    nam.na = ls[i];
    window.nam = nam;
    var firstLetter = ls[i].charAt(0).toLowerCase();
    if(firstLetter === 'j'){
      hellospeaker.speak(ls[i]);
    }
    else{
      byespeaker.speak(ls[i]);
    }
  }
})(window);