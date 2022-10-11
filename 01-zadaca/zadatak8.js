function obrni(array){
    var obrnuto = [];
    for (var i = array.length; i > 0; i--){
        obrnuto.push(array.pop());
    }
    return obrnuto;
}

console.log(obrni([3,4,5,6]));