export const normalizeDate = (indate: Date): Date => {
  const date = new Date(indate);
  date.setHours(0, 0, 0, 0);
  return date;
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
