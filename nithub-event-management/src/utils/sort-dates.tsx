const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function sortDates(dateArray: string[]) {
  // Convert the month names to numbers for easier comparison

  // Convert the date string to a Date object

  // Sort the array based on the Date objects
  dateArray.sort((a, b) => {
    return parseDate(a).getTime() - parseDate(b).getTime();
  });

  return dateArray;
}

export function parseDate(dateString: string): Date {
  const [day, month, year] = dateString.split(" ");
  const monthIndex = monthNames.indexOf(month);
  return new Date(parseInt(year), monthIndex, parseInt(day));
}
