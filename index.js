
function theBeatlesPlay(musicians, instruments){
  var arr = []
  for (var i = 0; i <= 3; i++) {
    if (musicians[i] === instruments) {
      arr.push("${i} plays ${instruments}")
    }
  }
}  