
function theBeatlesPlay(musicians, instruments){
  var arr = []
  for (var i = 0; i <= 3; i++) {
      arr.push(musicians[i] + " plays " + instruments[i])
    }
  return arr;
}  

function johnLennonFacts(facts){
  var result = []
  while (0 < facts.length){
    result.push(facts + "!!!")
  }
  return result
}