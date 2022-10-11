function sati_minute(X)
 { 
  var sati = Math.floor(X / 60);  
  var minute = X % 60;
  return "Ovo je " + sati + " sata i " + minute + " minuti";         
}

console.log(sati_minute(120));