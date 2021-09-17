// Question no:#01

// const MAX = 100;
 
let diagonalSum=(mat, n)=>{
    let principal = 0, secondary = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
 
            // Condition for principal diagonal
            if (i == j)
                principal += mat[i][j];
 
            // Condition for secondary diagonal
            if ((i + j) == (n - 1))
                secondary += mat[i][j];
        }
    }
 
    document.write("Principal Diagonal:" + principal + "<br>");
    document.write("Secondary Diagonal:" + secondary + "<br>");
}
 
    let a = [ [ 1, 2, 3 ], [4, 5, 6],
                     [7, 8, 9] ];
    diagonalSum(a, 3);






// Question no:#02

// const N = 4;
// let multiplyMatrix=(mat1, mat2, res)=>{
//     let i, j, k;
//     for (i = 0; i < N; i++) {
//         for (j = 0; j < N; j++) {
//             res[i][j] = 0;
//             for (k = 0; k < N; k++)
//                 res[i][j] += mat1[i][k] * mat2[k][j];
//         }
//     }
// }
 
//     let i, j;     
//     let res = new Array(N);
//     for (let k = 0; k < N; k++)
//         res[k] = new Array(N);         
//     let mat1 = [[2,4,4,4],[3,2,2,2],[1,5,9,1],[5,5,5,5]]
//     let mat2 = [[2,4,4,4],[3,2,2,2],[1,5,9,1],[5,5,5,5]]
//     multiplyMatrix(mat1, mat2, res);
//     document.write("Result of matrix is <br>");
//     for (i = 0; i < N; i++) {
//         for (j = 0; j < N; j++)
//             document.write(res[i][j] + " ");
//         document.write("<br>");
//     }



// Question no:#03


// Object ={
// parent_name: 'Father',
// child1: 'Sumair'
// }
// Array = ["Hamza","Shahbaz","Jahanzaib","Junaid","Tabish","Ahtisham","Asghar"]
  
// Object["child2"] = "Hamza";
// Object["child3"] = "Shahbaz";
// Object["child4"] = "Jahanzaib";
// Object["child5"] = "Junaid";
// Object["child6"] = "Tabish";
// Object["child7"] = "Ahtisham";
// Object["child8"] = "Asghar";
// console.log(Object);

// Question no:#04

// const fetchText= async()=> {
//     let response = await fetch('https://jsonplaceholder.typicode.com/users');
//    console.log(response);

//     if (response.status === 200) {
//         let data = await response.text();
//         // console.log(data);
//         console.log(response.status);
//     }
// }

// fetchText();