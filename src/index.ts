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