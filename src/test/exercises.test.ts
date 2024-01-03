type CarRanking = {
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
    expect(cars).toStrictEqual([
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
    expect(cars).toStrictEqual(["Kia Rio", "Volkswagen Golf", "MINI Cooper", "Mitsubishi Mirage", "Mazda Mazda3"]);
  });

  test("3: should return car that has highest average car price", () => {
    expect(cars).toStrictEqual("MINI Cooper");
  });

  test("4: should return grouped car names by year", () => {
    expect(cars).toStrictEqual({
      2020: ["Chevrolet Sonic"],
      2021: ["Kia Rio", "Volkswagen Golf", "MINI Cooper", "Mitsubishi Mirage", "Mazda Mazda3"],
      2022: ["Honda Civic", "Toyota Corolla", "Subaru Impreza", "Toyota Prius"]
    });
  });
});
