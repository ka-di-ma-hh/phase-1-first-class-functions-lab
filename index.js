// Code your solution in this file!
// Code your solution in this file!
const drivers=['Antonia','Nuru','Amari','Mo']

const returnFirstTwoDrivers = () => {
  return drivers.slice(0,2)
} 


const returnLastTwoDrivers = () => {
  return drivers.slice(-2)
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => {
  return (fare) => {
    return fare * multiplier;
  };
};
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arrayOfDrivers,func) => {
  return  func(arrayOfDrivers)
  
 
}
console.log()
