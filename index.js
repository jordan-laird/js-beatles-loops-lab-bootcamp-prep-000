
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
  while (i < facts.length){
    string.push(facts[i] + "!!!");
    i++;
  }
  return string;
}

function iLoveTheBeatles(number) {
  var arr = []
  var i = 0
  do {
    arr.push('I love the Beatles!');
    i++;
  } while (i < 15)
  return arr;
  
}