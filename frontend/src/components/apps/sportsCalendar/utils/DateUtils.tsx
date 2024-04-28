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

export const getMonthName = (monthKey: number): string => {
    return monthNames[monthKey];
}

export const normalizeDate = (indate: Date): Date => {
  const date = new Date(indate);
  date.setHours(0, 0, 0, 0);
  return date;
};

export const isAfterCurrentDate = (date: Date) => {
  const currentDate = normalizeDate(new Date());
  const compareDate = normalizeDate(new Date(date));
  return currentDate.valueOf() < compareDate.valueOf();
};

export const isCurrentDate = (date: Date) => {
  return (
    normalizeDate(new Date()).valueOf() ===
    normalizeDate(new Date(date)).valueOf()
  );
};

export const isDateInRange = (
  dateToCheck: Date,
  startDate: Date,
  endDate: Date
) => {
  const dateToCheckCopy = normalizeDate(dateToCheck);
  const startDateCopy = normalizeDate(startDate);
  const endDateCopy = normalizeDate(endDate);

  return dateToCheckCopy >= startDateCopy && dateToCheckCopy <= endDateCopy;
};
