let year = 3100
let is_leap_year = false;
if (year % 4 === 0){
    is_leap_year = true;
}
console.log(`${year} is${is_leap_year ? '' : 'NOT' } a leap year.`);
