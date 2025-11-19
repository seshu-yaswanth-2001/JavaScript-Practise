/*
 * Print the below Pattern-
    *
    * *
    * * *
    * * * *
    * * * * *
    * 
    * Outer loop is for rows and inner loop is for columns
 */


let n = 5;

console.log("Pattern code starts at 15 line")
for(let i = 1; i <= n; i++) {
    let result = "";
    for(let j = 1; j <= i; j++) {
        result += "* ";
    }
    console.log(result);
}


console.log("Next Pattern starts at 33 line")
/**
 * Print the below pattern
 *      * * * * * 
 *      * * * * 
 *      * * * 
 *      * * 
 *      *
 */


for(let i = n; i >= 0; i--) {
    let result = "";
    for(let j = 1; j <= i; j++) {
        result += "* ";
    }
    console.log(result);
}


/**
 *  1 
    2 3 
    4 5 6 
    7 8 9 10 
    11 12 13 14 15
 */

console.log("Next Pattern start at 46");

{
let counter = 1;

for(let i = 1; i <= n; i++) {
    let result = "";
    for(let j = (n - i); j < n; j++) {
        result += counter + " "
        counter++;
    }
    console.log(result);
}
}


/**
 * 1 2 3 4 5
 * 6 7 8 9 10
 * 11 12 13 14 15
 */


console.log("Next Pattern Start from 78")

let count = 1;

let rowCount = Math.ceil(n / 2);

for(let i = 1; i <= rowCount; i++) {
    let res = "";
    for(let j = 1; j <= n; j++) {
        res += count + " ";
        count++;
    }
    console.log(res);
}




/**
 * 
            *
          *   *
        *   *    *
     *   *    *    *
  
 */


console.log("Next pattren at 105");
for(let i = 1; i <= n; i++) {
    let result = "-".repeat(n - i);
    for(let j = 1; j <= i; j++){
        result += "* ";
    }
    console.log(result);
}