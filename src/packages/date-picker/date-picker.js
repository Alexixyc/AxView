/*
 * @Author: AlexiXiang
 * @Date: 2018-10-26 14:23:44
 * @LastEditors: AlexiXiang
 * @LastEditTime: 2018-11-05 16:39:06
 * @Description: 
 */

/**
 * 每个格子是一对象，表示某一天
 * @param {*} row 
 * @param {*} column 
 * @param {*} dateStr: 可以准换成Date对象的字符串 
 */
function Cell(dateStr) {
    // this.row = row // 行
    // this.column = column // 列
    // this.value = value
    let today = new Date()
    this.date = new Date(dateStr) // 日期对象
    this.year = this.date.getFullYear() // 年
    this.month = this.date.getMonth() + 1  // 月1-12
    this.day = this.date.getDate() // 日
    this.isToday = this.year === today.getFullYear()
        && this.month === today.getMonth() + 1 
        && this.day === today.getDate() ? true : false
}

/**
 * Panel面板对象，表示当前显示的整个面板
 * @param {*} year
 * @param {*} month
 */
function Panel(year = new Date().getFullYear(), month = new Date().getMonth() + 1) {
    this.cells = []
    month = month < 10 ? `0${month}` : month
    this.currentMonth = new Month(`${year}-${month}-01`) // 当前这个月对象
    let firstdayInWeek = this.currentMonth.firstdayInWeek
    for (let row = 0; row < 6; row++) {
        let rowCells = []
        for (let col = 0; col < 7; col++) {
            // 第一行单独处理
            if (row === 0) {
                firstdayInWeek === 0 ? (() => {
                    // 若本月的第一天是周日，则第一行的没一列是上个月的倒数第(7 - col)天
                    rowCells.push(this.currentMonth.prevMonth().lastXDay(7 - col))
                })() : (() => {
                    firstdayInWeek > col ?
                        // 若本月第一天不死周日，则第一行前部分是上个月的倒数第(firstdayInWeek - col)天
                        rowCells.push(this.currentMonth.prevMonth().lastXDay(firstdayInWeek - col)) :
                        // 第二部分是这个月的第(col - firstdayInWeek + 1)天
                        rowCells.push(this.currentMonth.someDay(col - firstdayInWeek + 1))
                })()
            } else {
                // 非第一行的号数
                let val = 7 * row - (firstdayInWeek || 7) + col + 1
                val <= this.currentMonth.monthDays ?
                    // 若 val <= 当月天数，则是当月val号
                    rowCells.push(this.currentMonth.someDay(val)) :
                    // val > 当月天数，则是下月的(val - this.currentMonth.monthDays)号
                    rowCells.push(this.currentMonth.nextMonth().someDay(val - this.currentMonth.monthDays))
            }
        }
        this.cells.push(rowCells)
    }
    // Panel对象:上一个月Panel
    this.prevPanelMonth = () => {
        let y = this.currentMonth.prevMonth().year
        let m = this.currentMonth.prevMonth().month
        return new Panel(y, m)
    }
    // Panel对象:下一个月Panel
    this.nextPanelMonth = () => {
        let y = this.currentMonth.nextMonth().year
        let m = this.currentMonth.nextMonth().month
        return new Panel(y, m)
    }
    // Panel对象:上一年Panel
    this.prevPanelYear = () => {
        let y = this.currentMonth.year - 1
        let m = this.currentMonth.month
        y = y < 1000 ? 1900 : y
        return new Panel(y, m)
    }
    // Panel对象:下一年Panel
    this.nextPanelYear = () => {
        let y = this.currentMonth.year + 1
        let m = this.currentMonth.month
        return new Panel(y, m)
    }
}

/**
 * 月份对象
 * @param {*} dateStr: 可被new Date()转换的日期格式
 */
function Month(dateStr) {
    this.date = new Date(dateStr)
    this.year = this.date.getFullYear() // 该年的年份
    this.month = this.date.getMonth() + 1 // 该月的月份 1-12
    this.monthDays = getMonthDays(this.date) //该月的天数
    this.firstdayInWeek = this.date.getDay()
    // Cell对象:这个月的倒数第x天
    this.lastXDay = (num) => {
        let d = num <= this.monthDays ? this.monthDays - num + 1 : -1
        return new Cell(`${this.year}-${this.month < 10 ? `0${this.month}` : this.month}-${d < 10 ? `0${d}` : d}`)
    }
    // Cell对象:这个月的某号
    this.someDay = (d) => {
        return new Cell(`${this.year}-${this.month < 10 ? `0${this.month}` : this.month}-${d < 10 ? `0${d}` : d}`)
    }
    // Month对象:上一个月
    this.prevMonth = () => {
        let m = this.month == 1 ? 12 : this.month - 1
        let y = this.month == 1 ? this.year - 1 : this.year
        y = y < 1000 ? 1900 : y
        return new Month(`${y}-${m < 10 ? `0${m}` : m}-01`)
    }
    // Month对象:下一个月
    this.nextMonth = () => {
        let m = this.month == 12 ? 1 : this.month + 1
        let y = this.month == 12 ? this.year + 1 : this.year
        return new Month(`${y}-${m < 10 ? `0${m}` : m}-01`)
    }
}

/**
 * fn:计算这个月有多少天
 * @param {*} date 传入一个Date()对象
 * @returns {Integer} 这个月的天数
 */
function getMonthDays(date) {
    let month = date.getMonth() + 1
    if (month === 2) {
        return isLeapYear(date.getFullYear()) ? 29 : 28
    } else {
        return [4, 6, 9, 11].indexOf(month) > -1 ? 30 : 31
    }
}

/**
 * 计算是否是闰年
 * @param {*} year: 年份
 * @returns {Boolean} 是否是闰年
 */
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 != 0) || (year % 400 === 0)
}

export { Panel }