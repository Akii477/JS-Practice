let myDate = new Date();
console.log(Date()); // Thu May 02 2024 21:41:22 GMT+0530 (India Standard Time)

console.log(typeof(Date()));
console.log(myDate.getTime()); //1714667960823 in millisecond.
console.log(myDate.toDateString()); // only dates. 
console.log('date ',myDate.getDate());
console.log('month ',myDate.getMonth());
console.log('year ',myDate.getFullYear());
console.log('Hours ', myDate.getHours());
console.log('Minutes', myDate.getMinutes());
console.log('Seconds', myDate.getMilliseconds());

// console.log(myDate.toLocaleString('en-US'));
console.log(myDate.toLocaleString('en-GB',{hour12: true}));
console.log('ISOString', myDate.toISOString());

console.log('UTC', myDate.getUTCDate());
console.log('UTC',myDate.toUTCString({hour12: true}));




//There are 9 ways to create a new date object:
// new Date()
// new Date(date string)
// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)
// new Date(milliseconds)
