function matrixProduct(mat1, mat2) {
    let product = []; 
    for(let row=0; row<mat1.length; row++) {
        let productRow = [];
        for(let col=0; col<mat2[0].length; col++) {
            productRow.push(productRowCol(mat1, mat2, row, col)); 
        }
        product.push(productRow); 
    }
    return product; 
}

function productRowCol(mat1, mat2, row, col) {
    let result = 0; 
    for(let i=0; i<mat1[row].length; i++) {
        result += mat1[row][i]*mat2[i][col]; 
    }
    return result; 
}


function sumOfMatrices(mat1, mat2) {
    let sum = [];
    for(let row = 0; row < mat1.length; row++) {
        let sumRow = []; 
        for(let col = 0; col < mat1[row].length; col++) {
            sumRow.push(mat1[row][col]+mat2[row][col]); 
        }
        sum.push(sumRow);
    }
    return sum;
}


function sumOfArray(arr) {
    let sum = 0; 
    for(let i=0; i<arr.length; i++) {
        sum += arr[i]; 
    }
    return sum;
}

function sumOfEachRow(mat) {
    let result = []; 
    for(let row=0; row<mat.length; row++) {
        result.push(sumOfArray(mat[row])); 
    }
    return result;
}

module.exports = {matrixProduct, sumOfMatrices, sumOfEachRow}