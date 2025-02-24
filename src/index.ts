import {CarRanking} from './test/exercises.test';

export function sortCarsByScore(cars: CarRanking[]): string[] {
    return [...cars]
        .sort((i: CarRanking, j: CarRanking) => {
            if (i.score > j.score) return -1;
            else return 1;
        })
        .map((car) => car.name);
}

export function sortedCarbyYear(cars: CarRanking[]): string[] {
    return [...cars]
        .filter((car) => car.year === 2021)
        .map((car) => car.name);
}


export function maxAvgPriceCar(cars: CarRanking[]) :string{
    return [...cars]
        .map((car) => ({ name: car.name, avgPrice: (car.priceRange[0] + car.priceRange[1]) / 2 }))
        .sort((i, j) => {if (i.avgPrice > j.avgPrice) return -1; else return 1})[0].name;
}

interface groupedYear{
    [key: number]: string[];
  }

export function groupedCarNamesByYear(cars: CarRanking[]): groupedYear {
    return [...cars]
        .reduce((acc: groupedYear, car: CarRanking) => {
        acc[car.year] ? acc[car.year].push(car.name) : acc[car.year] = [car.name];
        return acc;
    }, {});
}

// s-99
// P01 (*) Find the last element of a list.
var list1:number[] = [1, 1, 2, 3, 5, 8]
let lastIndex = list1[list1.length - 1]
console.log(lastIndex);

//P02 (*) Find the last but one element of a list.
let onelastIndex = list1[list1.length - 2]
console.log(onelastIndex);

//P03 (*) Find the index element of a list.
let findIndex = (list1:number[], index:number) => {
    return list1[index]
}
console.log(findIndex(list1,0))

// P04 (*) Find the number of elements of a list.
let findLength = list1.length
console.log(findLength)

// P05 (*) Reverse a list.
let revLength = list1.reverse();
console.log(revLength)

function isPalindrome(listA:number[]):boolean{
    let revList = [...listA].reverse();
    console.log(listA)
    console.log(revList)

    for (let i = 0; i < listA.length; i++){
        if (listA[i] !== revList[i]){
            return false;
        }
    }
    return true;
}

var list2:number[] = [5, 8, 1]
console.log(isPalindrome(list2))

// function flatten(listA:any[]):any[]{
//     return listA.flatMap((i) => i);
// }

function flatten(listA:any[]):any[]{
    return listA.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}


let nestedList: Array<any> = [1, 2, [[3, 4], [5, [6]]]];

console.log(flatten(nestedList));



