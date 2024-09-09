// run code in terminal: 
// node 01_basics/10_datesinjs


// Dates

// let myDate = new Date()
// console.log(myDate); // 2024-09-02T14:10:07.717Z

// console.log(myDate.toString()); // Tue Sep 03 2024 04:34:46 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Tue Sep 03 2024
// console.log(myDate.toISOString()); // 2024-09-03T04:34:46.116Z
// console.log(myDate.toJSON()); // 2024-09-03T04:34:46.116Z
// console.log(myDate.toLocaleDateString()); // 9/3/2024
// console.log(myDate.toLocaleString()); // 9/3/2024, 4:34:46 AM
// console.log(myDate.toLocaleTimeString()); // 4:34:46 AM
// console.log(myDate.toTimeString()); // 04:34:46 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toUTCString()); // Tue, 03 Sep 2024 04:34:46 GMT
// console.log(myDate.getTimezoneOffset()); // 0

// console.log(typeof myDate); // object

// let myCreatedDate = new Date (2023, 0, 23)
// console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023

// let myCreatedDate2 = new Date (2023, 0, 23, 5, 3)
// console.log(myCreatedDate2.toLocalString()); // 1/23/2023, 5:03:00 AM

// let myCreatedDate3 = new Date ("01-23-2023")
// console.log(myCreatedDate3.toDateString()); // 1/23/2023, 12:00:00 AM




// let myTimeStamp = Date.now()
// console.log(myTimeStamp); // 1725339012933

// console.log(Date.now()); // time in mili seconds 1725339012938
// console.log(Date.now()/1000); // time in seconds 1725339012.938
// console.log(Math.floor(Date.now()/1000)); // time in seconds only 1725339012





// Get only one of all (only month/day/date/fullyear/miliseconds....)

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate())
// console.log(newDate.getDay())
// console.log(newDate.getFullYear())
// console.log(newDate.getHours())
// console.log(newDate.getMilliseconds())
// console.log(newDate.getMinutes())
// console.log(newDate.getMonth())
// console.log(newDate.getSeconds())
// console.log(newDate.getSeconds())
// console.log(newDate.getTime())
// console.log(newDate.getTimezoneOffset())
// console.log(newDate.getUTCDate())
// console.log(newDate.getUTCDay())
// many more








