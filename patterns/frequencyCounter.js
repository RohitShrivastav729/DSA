
let arr1 = [1,2,2,3,4, 5, 7];
let arr2 = [1,4,4,9,16, 25, 36];

function sum (arr1, arr2){
    if(arr1.length != arr2.length) return false;

    let obj1 = {};
    let obj2 = {};

    for(let val of arr1){
        obj1[val] = obj1[val] ? obj1[val]+1 : 1;
    }

    for(let val of arr2){
        obj2[val] = obj2[val] ? obj2[val]+1 : 1;
    }
    console.log(obj1);
    console.log(obj2);

    for(let key in obj1){
        if(key**2 in obj2 == false) return false;

        if(obj2[key**2] != obj1[key]) return false;
    }

    return true;

}

console.log(sum(arr1, arr2));