function forLoopX(array) {
  let makeA = [];
  for (let i=0; i<25; i++){
    makeA[i] = `"I am ${i+1} strange loop${i === 0 ? '' : 's'}."`
  }

  return makeA;

}

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {

      array.push("I am 1 strange loop.");
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }

  return array
}

function whileLoop(n) {
  for (let i = n; n===0; n--){
    
  }
 }