const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,, 10];

// const evenNumbers = number.filter(function (number) {
//     return number % 2 === 0;
// });

// Short version
// const evenNumbers = numbers.filter(number => number % 2 === 0);

// Same with forEach 
const evenNumbers = [];
numbers.forEach(number => {
    if (number % 2 === 0){
        evenNumbers.push(number)
    }
})

// console.log(evenNumbers);

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

// Get only retails compnaies
const retailCompanies = companies.filter(company => company.category === 'Retail');

console.log(retailCompanies);

// Get companies that started in or after 1980 and ended in or before 2005
const earlyCompanies = companies.filter(company => company.start >= 1980 && company.end <= 2005);

console.log(earlyCompanies);

