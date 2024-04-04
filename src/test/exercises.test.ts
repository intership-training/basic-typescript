import { sortCarsByScore, sortedCarbyYear, maxAvgPriceCar, groupedCarNamesByYear } from "../index";

export type CarRanking = {
  name: string;
  year: number;
  score: number;
  priceRange: [number, number];
};

const cars: CarRanking[] = [
  {
    name: "Kia Rio",
    year: 2021,
    score: 8.1,
    priceRange: [21900, 29400]
  },
  {
    name: "Volkswagen Golf",
    year: 2021,
    score: 8.2,
    priceRange: [23195, 23995]
  },
  {
    name: "MINI Cooper",
    year: 2021,
    score: 7.9,
    priceRange: [22400, 44900]
  },
  {
    name: "Mitsubishi Mirage",
    year: 2021,
    score: 5.6,
    priceRange: [14295, 18195]
  },
  {
    name: "Chevrolet Sonic",
    year: 2020,
    score: 8.0,
    priceRange: [16720, 21520]
  },
  {
    name: "Honda Civic",
    year: 2022,
    score: 8.7,
    priceRange: [21900, 29400]
  },
  {
    name: "Toyota Corolla",
    year: 2022,
    score: 8.0,
    priceRange: [20075, 28360]
  },
  {
    name: "Subaru Impreza",
    year: 2022,
    score: 7.9,
    priceRange: [18795, 26395]
  },
  {
    name: "Mazda Mazda3",
    year: 2021,
    score: 8.6,
    priceRange: [20650, 33900]
  },
  {
    name: "Toyota Prius",
    year: 2022,
    score: 7.8,
    priceRange: [24525, 32820]
  }
];

describe("should produce right answers", () => {
  test("1: should produce sorted car names by score in ascending order", () => {
    
    // let x = [...cars].sort((i:CarRanking, j:CarRanking) => {
    //   if (i.score > j.score) return -1; else return 1}).map((car) => car.name);
    
    let sortedCarNames = sortCarsByScore([...cars]);
    expect(sortedCarNames).toStrictEqual([
      "Honda Civic",
      "Mazda Mazda3",
      "Volkswagen Golf",
      "Kia Rio",
      "Chevrolet Sonic",
      "Toyota Corolla",
      "MINI Cooper",
      "Subaru Impreza",
      "Toyota Prius",
      "Mitsubishi Mirage"
    ]);

  });

  test("2: should return 2021 car names", () => {
    // let x = [...cars].filter((i) => i.year === 2021).map((car) => car.name);
    let sorted2021CarNames = sortedCarbyYear([...cars]);
    expect(sorted2021CarNames).toStrictEqual(["Kia Rio", "Volkswagen Golf", "MINI Cooper", "Mitsubishi Mirage", "Mazda Mazda3"]);
  });

  test("3: should return car that has highest average car price", () => {
   
    // let x = [...cars].map((car) => ({ name: car.name, avgPrice: car.priceRange.reduce((a, b) => a + b, 0) / 2}))
    // .sort((i, j) => {if (i.avgPrice > j.avgPrice) return -1; else return 1})[0].name;

    let maxAvgPriceCarName = maxAvgPriceCar([...cars]);
    expect(maxAvgPriceCarName).toStrictEqual("MINI Cooper");
  });

  test("4: should return grouped car names by year", () => {
    let groupCarNamesByYear = groupedCarNamesByYear([...cars]);
    // interface groupedYear{
    //   [key: number]: string[];
    // }

    //Shorthand
    // let x = [...cars].reduce((acc:groupedYear, car: CarRanking) => {
    //   acc[car.year] ? acc[car.year].push(car.name) : acc[car.year] = [car.name]
    //   return acc;
    // }, {});
     
    // Youtube method
    // let x = [...cars].reduce((acc: groupedYear, car: CarRanking) => {
    //   const key = car.year;
    //   acc[key] = acc[key] || [];
    //   acc[key].push(car.name);
    //   return acc;
    // }, {} as groupedYear);
    
    // If/else method
    // Not use interface
    // let x = [...cars].reduce((acc:{[year: number]: string[]}, car: CarRanking) => {
    
     //use interface (gruopedYear)
    // let x = [...cars].reduce((acc:groupedYear, car: CarRanking) => {
    //   if (acc[car.year]){
    //     acc[car.year].push(car.name)
    //   }
    //   else{
    //     acc[car.year] = [car.name]
    //   }
    //   return acc;
    // }, {});


    expect(groupCarNamesByYear).toStrictEqual({
      2020: ["Chevrolet Sonic"],
      2021: ["Kia Rio", "Volkswagen Golf", "MINI Cooper", "Mitsubishi Mirage", "Mazda Mazda3"],
      2022: ["Honda Civic", "Toyota Corolla", "Subaru Impreza", "Toyota Prius"]
    });
  });
});
