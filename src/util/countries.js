import sc from "states-cities-db";

const COUNTRIES = sc.getCountries();

const getCountryTelCode = country => country && COUNTRIES.find(({ iso2 }) => iso2 === country).prefix;

const states = country => {
  let a = sc.getStates(country);
  console.log(a);
};

export { COUNTRIES, getCountryTelCode, states };

export function convertDate(dateString) {
  // Parse the date string using the Date constructor and set the timezone offset
  const date = new Date(dateString)
  // Extract the year, month, and day from the date object
  const year = new Date().getUTCFullYear()
  const month = ("0" + (date.getUTCMonth() + 1)).slice(-2)
  const day = ("0" + date.getUTCDate()).slice(-2)

  // Combine the year, month, and day into a string in ISO format (e.g. "2021-09-07")
  const isoDate = `${year}-${month}-${day}`

  console.log("data converted", isoDate)
  return isoDate;
}
  export const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  