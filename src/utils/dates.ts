const getFutureDate = (date: Date, daysFuture: number) => {
  let newDate = new Date(date);
  newDate.setDate(newDate.getDate() + daysFuture);

  return newDate;
};

export default getFutureDate;
