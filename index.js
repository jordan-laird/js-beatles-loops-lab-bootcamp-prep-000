
function theBeatlesPlay(musicians, instruments){
  var arr = []
  for (var i = 0; i <= 3; i++) {
      arr.push(musicians[i] + " plays " + instruments[i])
    }
  return arr;
}  

function johnLennonFacts(facts) {
  var result = []
  var count = 0
  while (count < facts.length){
    result.push(facts[count] + "!!!");
  }
  return result;
}