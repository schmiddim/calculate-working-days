let Holidays = require('date-holidays');
let moment = require('moment');


class WorkDayCounter {


    constructor(dateStart, dateEnd, numLeaveDays) {
        this.hd = new Holidays();
        this.hd.init('DE', 'by');

        this.dateStart = moment(dateStart);
        this.dateEnd = moment(dateEnd);
        this.numLeaveDays = numLeaveDays;
    }

    /**
     * @param {Moment} day
     * @returns {boolean}
     */
    static _isWorkingDay(day) {
        return day.isoWeekday() < 6;
    }

    /**
     *
     * @param {Date}day
     * @returns {boolean}
     */
    _isPublicHoliday(day) {
        let isHoliday = this.hd.isHoliday(day);
        if (!isHoliday) {
            return false;
        }
        return isHoliday.type === 'public';
    }

    calculateWorkingDays() {
        let dayCounter = 0;
        dayCounter -= this.numLeaveDays;
        for (let m = moment(this.dateStart); m.diff(this.dateEnd, 'days') <= 0; m.add(1, 'days')) {
            if (!this._isPublicHoliday(m.toDate()) && WorkDayCounter._isWorkingDay(m)) {
                dayCounter++;
            }
        }
        return dayCounter;
    }

}


module.exports = WorkDayCounter;