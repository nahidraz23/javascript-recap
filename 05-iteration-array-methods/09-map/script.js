const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers);

const companies = [
    { name: "TechNova", category: "Technology", start: 1980, end: 2004 },
    { name: "MediCare", category: "Healthcare", start: 2005, end: 2015 },
    { name: "HealthHub", category: "Healthcare", start: 2011, end: 2019 },
    { name: "CodeCraft", category: "Technology", start: 2015, end: 2023 },
    { name: "ShopEase", category: "Retail", start: 2009, end: 2022 },
    { name: "InnoTech", category: "Technology", start: 2008, end: 2018 },
    { name: "WellnessWorks", category: "Healthcare", start: 2016, end: 2024 },
    { name: "EduCore", category: "Education", start: 2012, end: 2021 },
    { name: "LearnPros", category: "Education", start: 2007, end: 2020 },
    { name: "BazaarNow", category: "Retail", start: 2010, end: 2023 },
    { name: "SmartLearn", category: "Education", start: 2014, end: 2023 },
    { name: "QuickMart", category: "Retail", start: 2006, end: 2018 },
  ];

//   Create an array of objects with the name and length of each compnay in years
const companyYears = companies.map( company => {
    return {
        name: company.name,
        companyAge: company.end - company.start
    }
});

// console.log(companyYears);

// Chain map methods
const squareAndDoubled = numbers
    .map(number => Math.sqrt(number))   
    .map(doubled => doubled *2)

console.log(squareAndDoubled);


