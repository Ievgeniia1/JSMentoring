function areArraysTheSame(arr1,arr2) {
    let areEql=false;
    if (arr1.length === arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] === arr2[i]) {
                areEql=true
            }
            else {
                areEql=false;
                break;
            }
        }
    }

return areEql


}

let a = [1,2,3];
let b = [1,2,3,4];

console.log(areArraysTheSame(a,b));