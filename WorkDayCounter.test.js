const WorkdayCounter = require('./WorkDayCounter.js');
let moment = require('moment');

test('2019-04-04 of April is not an Holiday', () => {

    let workDayCounter = new WorkdayCounter(new Date(), new Date('2019-06-28'), 0);
    expect(workDayCounter._isPublicHoliday(new Date('2019-04-04'))).toBe(false)

});

test('2019-04-19 of April is an Holiday', () => {

    let workDayCounter = new WorkdayCounter(new Date(), new Date('2019-06-28'), 0);
    expect(workDayCounter._isPublicHoliday(new Date('2019-04-19'))).toBe(true)

});

test('2019-04-12 of April is a Weekday', () => {

    expect(WorkdayCounter._isWorkingDay(moment(new Date('2019-04-12')))).toBe(true)

});

test('2019-04-13 of April is not a Weekday', () => {

    expect(WorkdayCounter._isWorkingDay(moment(new Date('2019-04-13')))).toBe(false)

});

test('There are 57 Workdays from 2019-04-03 to 2019-06-30', () => {

    let workDayCounter = new WorkdayCounter(new Date('2019-04-03'), new Date('2019-06-30'), 0);
    expect(workDayCounter.calculateWorkingDays()).toBe(57)

});

test('There are 43 Workdays from 2019-04-03 to 2019-06-30 with 14 leave days', () => {

    let workDayCounter = new WorkdayCounter(new Date('2019-04-03'), new Date('2019-06-30'), 14);
    expect(workDayCounter.calculateWorkingDays()).toBe(43)

});
