#!/usr/bin/node


const WorkdayCounter = require('./WorkDayCounter.js');

let dateStart = new Date();
let numLeaveDays = 14;

let dateFromCli = new Date(process.argv[2]);
let dateEnd = new Date('2019-06-28');

if (dateFromCli instanceof Date && !isNaN(dateFromCli)) {
    dateEnd = new Date(dateFromCli);
}
else {
    console.log("Invalid date passed - I use ", dateEnd);
}


let workdayCounter = new WorkdayCounter(dateStart, dateEnd, numLeaveDays);
console.log("work days", workdayCounter.calculateWorkingDays());