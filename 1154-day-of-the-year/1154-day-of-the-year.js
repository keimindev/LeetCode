/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    return ((new Date(date) - new Date(date.slice(0,4))) + 86400000) / 86400000;

    //subtract the two Date objects, i get the difference in milliseconds between the two dates.
    //Since one day (24 hours) equals 86,400,000 milliseconds, use this value for conversion.
    // In JavaScript, when creating a Date object using new Date("YYYY"), it defaults to January 1st, 00:00:00 UTC.
    //this value might be calculated differently depending on the local time zone.
    //To correct this potential offset, we add 86,400,000 milliseconds (one day).
    //divide the total milliseconds by 86,400,000 to get the exact day number of the year.
};