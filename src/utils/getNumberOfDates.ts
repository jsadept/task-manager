export const getNumberOfDays = (start: string | Date, end: string | Date) => {

    let startDate: Date = typeof start === 'string' ? new Date(start) : start;
    let endDate: Date = typeof end === 'string' ? new Date(end) : end;


    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = endDate.getTime() - startDate.getTime();

    // Calculating the no. of days between two date
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
}

