function formatDate(date, rule) {
    date = new Date(date)
    const Y = date.getFullYear()
    let M = date.getMonth() + 1
    let D = date.getDate()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    h = h > 9 ? h : '0' + h
    m = m > 9 ? m : '0' + m
    s = s > 9 ? s : '0' + s
    switch (rule) {
    case 'YYYY-MM-DD':
        M = M > 9 ? M : '0' + M
        D = D > 9 ? D : '0' + D
        return Y + '-' + M + '-' + D
    case 'YYYYMMDD':
        M = M > 9 ? M : '0' + M
        D = D > 9 ? D : '0' + D
        return '' + Y + M + D
    case 'HH:MM':
        return h + ':' + m
    case 'HHMM':
        return '' + h + m
    case 'HH:MM:SS':
        return '' + h + ':' + m + ':' + s
    case '月日':
        return parseInt(M) + '月' + parseInt(D) + '日'
    default:
        M = M > 9 ? M : '0' + M
        D = D > 9 ? D : '0' + D
        return Y + '-' + M + '-' + D + ' ' + h + ':' + m
    }
}
export { formatDate }