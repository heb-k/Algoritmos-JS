function diagonalDifference(arr) {
    let diag1= 0
    let diag2= 0
    let resultado= 0
    for(let i = 0; i < arr.length; i++){
        diag1 += arr[i][i]
        diag2 += arr[i][(arr.length - 1) - i]
    }
    resultado = Math.abs(diag1- diag2)
    return resultado
}
