import sc from "states-cities-db";

const COUNTRIES = sc.getCountries();

const getCountryTelCode = (country) =>
  country && COUNTRIES.find(({ iso2 }) => iso2 === country).prefix;

const states = (country) => {
  let a = sc.getStates(country);
  console.log(a);
};

export { COUNTRIES, getCountryTelCode, states };

export function convertDate(dateString) {
  // Parse the input date string
  const dateParts = dateString.split(", ");
  const day = dateParts[0]; // Extract the day part
  const monthAndDay = dateParts[1].split(" "); // Split the month and day
  const month = monthAndDay[0]; // Extract the month part
  const dayOfMonth = monthAndDay[1]; // Extract the day of the month

  // Get the current year
  const year = new Date().getUTCFullYear();

  // Convert month name to a numeric representation
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthNumeric = months.indexOf(month) + 1;

  // Format the date to 'YYYY-MM-DD'
  const isoDate = `${year}-${monthNumeric
    .toString()
    .padStart(2, "0")}-${dayOfMonth.padStart(2, "0")}`;

  console.log("Data converted:", isoDate);
  return isoDate;
}
export const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
