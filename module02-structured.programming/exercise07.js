let years = [2000, 2004, 2100, 2104, 2200, 2204, 2300, 2400, 2500, 2600, 2700, 2800, 2804, 2900, 3000, 3100, 3200, 3300];
for (let year of years) {
    let is_leap_year = false;
    if (year % 4 === 0) {
        if (year % 400 === 0) {
            is_leap_year = true;
        } else is_leap_year = year % 100 !== 0;
    }
    console.log(`${year} is${is_leap_year ? '' : ' NOT'} a leap year.`);
}
