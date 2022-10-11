function djeljivo_s_3(array)
 { 
    let djeljivo = [];
    for (i = 0, len = array.length; i < len; i++) {
        if(array[i] % 3 == 0){
            djeljivo.push(array[i]); } }
    return "Brojevi djeljivi s 3: " + djeljivo;       
}

console.log(djeljivo_s_3( [1,2,3,4,5,6,7,8,9,10]));