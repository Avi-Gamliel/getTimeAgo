// get date Time | milliseconds | string

function getTimeAgo(time) {

    // convertTime if need can get time // string time // 
    const millisecond = new Date(time).getTime()
    const todayInMillisecond = new Date().getTime()
    const left = todayInMillisecond - millisecond
    const seconds = left / 1000
    const minutes = seconds / 60
    const hours = minutes / 60
    const days = hours / 24
    const weeks = days / 7
    const months = weeks / 30
    const years = months / 12
    const formater = new Intl.RelativeTimeFormat(undefined)

    if (seconds < 60) return formater.format(Math.floor(-seconds), "seconds")
    if (minutes < 60) return formater.format(Math.floor(-minutes), "minutes")
    if (hours < 24) return formater.format(Math.floor(-hours), "hours")
    if (days < 7) return formater.format(Math.floor(-days), "days")
    if (weeks < 30) return formater.format(Math.floor(-weeks), "weeks")
    if (months < 12) return formater.format(Math.floor(-months), "months")
    if (years < 12) return formater.format(Math.floor(-years), "months")

}
