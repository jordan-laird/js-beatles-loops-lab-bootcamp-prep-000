
function theBeatlesPlay(musicians, instruments){
  var arr = []
  for (var i = 0; i <= 3; i++) {
      arr.push(musicians[i] + " plays " + instruments[i])
    }
  return arr;
}  

function johnLennonFacts(facts) {
  var string = []
  var i = 0
  while (i < 3){
    string.push(facts[i] + "!!!");
    i++;
  }
  return string;
}