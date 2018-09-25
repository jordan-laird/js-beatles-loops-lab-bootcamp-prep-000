
function theBeatlesPlay(musicians, instruments){
  var arr = []
  for (var i = 0; i <= 3; i++) {
      arr.push(musicians[i] + " plays " + instruments[i])
    }
  return arr;
}  

function johnLennonFacts(facts) {
  var result = []
  var i = 0
  while (i < facts.length){
    result.push(facts[i] + "!!!");
    count++;
  }
  return result;
}