function plusMinus(arr) {
    let mais 0;
    let menos 0;
    let zero= 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            mais ++;
        }else if(arr[i] < 0){
            menos ++;
        }else{
            zero ++;
        }
    }
    mais /= arr.length;
    menos /= arr.length;
    zero /= arr.length
    
    console.log(mais)
    console.log(menos)
    console.log(zero)
}
