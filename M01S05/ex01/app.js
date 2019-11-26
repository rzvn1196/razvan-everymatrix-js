function getTime() {
    
    var hours = (new Date()).getHours(),
  minutes = (new Date()).getMinutes(),
  seconds = (new Date()).getSeconds();
  ms = (new Date()).getMilliseconds();

return `${hours}:${minutes}:${seconds}:${ms} Am ajuns la Everymatrix.`;
}



// console.log(
//   (new Date()).getHours() + ':' +
//   (new Date()).getMinutes() + ':' +
//   (new Date()).getSeconds() + ':' +
//   (new Date()).getMilliseconds(),

//   'Am ajuns la curs'
// );