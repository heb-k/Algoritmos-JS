function compareTriplets(a, b) {
    var alice= 0
    var bob= 0
    for(let i = 0; i < a.length; i++){
        if(a[i] > b[i]){
            alice++
        }else if(a[i] < b[i]){
            bob++
        }
    }
    return [alice, bob]
