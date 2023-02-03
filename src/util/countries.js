import sc from "states-cities-db";

const COUNTRIES = sc.getCountries();

const getCountryTelCode = country => country && COUNTRIES.find(({ iso2 }) => iso2 === country).prefix;

const states = country => {
  let a = sc.getStates(country);
  console.log(a);
};

export { COUNTRIES, getCountryTelCode, states };