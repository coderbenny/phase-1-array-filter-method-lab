
// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];


function findMatching(drivers, name){
    const lowercaseName = name.toLowerCase();
    const matchingDrivers = drivers.filter(driver => driver.toLowerCase() === lowercaseName);
    
    return matchingDrivers;
}

function fuzzyMatch(drivers, letters){
    const matchingDrivers = drivers.filter(driver => driver.slice(0, 2).toLowerCase() === letters.toLowerCase());
    return matchingDrivers    
}

const driversObj = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh' },
      {
        name: 'Sammy',
        hometown: 'New York' } ,
      {
        name: 'Sally',
        hometown: 'Cleveland' },
      {
        name: 'Annette',
        hometown: 'Los Angeles' },
      {
        name: 'Bobby',
        hometown: 'Tampa Bay' } 
]

function matchName(driversObj, dName){
    const matchingDrivers = driversObj.filter(driver => driver.name === dName)
    return matchingDrivers
}