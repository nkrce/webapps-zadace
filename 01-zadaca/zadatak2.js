function pretvorba_valute(HRK)
 { 
  let euro = 0.13;   
  let pretvorba = (HRK * euro);  
  return "HRK= " + HRK + " EUR= " + pretvorba;         
}

console.log(pretvorba_valute(120));