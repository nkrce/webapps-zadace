function provjeri_broj(broj)
 { 
    if (broj >= 100 && broj <= 150000) 
        return broj + " je unutar [100,150000]";
    else
        return broj + " nije unutar [100,150000]";     
}

console.log(provjeri_broj(53));