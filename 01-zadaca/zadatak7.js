function provjeriX (X)
 { 
    let sum = 1;
    if (X >= 0 && X <= 1000){
        for (let i = 1; i <= X; i++){
            if (i % 7 == 0){
                sum = sum * i;}
        }
        return sum;
    }
    else 
        return "Broj nije unutar [0, 1000]";       
}


console.log(provjeriX(23));