function forLoop (array){
  for (let i = 0; i < 25; i++ ){
    if (i != 1) {
     array.push("I am " + i + " strange loops.");
    } else {
     array.push("I am 1 strange loop.");
    }
  }return array 
}
 
function whileLoop(number){
  let countdown = number;
  while (countdown > 0){
    console.log (--countdown)
    if (countdown === 0){
      return "done";
    }
    }
}
function doWhileLoop (array){
  function maybeTrue(){
    return Math.random()
  }
  do {
    console.log ('doo-bee-doo-bee-doo')
  }while (array.length >=0 && maybeTrue());
  return array
}