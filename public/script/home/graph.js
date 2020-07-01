const fromEvent = require("rxjs").fromEvent

const bookClickFn = (() => {
    fromEvent($(`.bookButton`), 'click').subscribe((e) => {
        const target = e.currentTarget
        const href = $(target).attr("value")
        location.href = href
    });
})()

const rollClickFn = (() => {
    fromEvent($(`.rollButton`), 'click').subscribe((e) => {
        const target = e.currentTarget
        const roolNumber = $(target).attr("data-value")
        const href = (val) => {
            return `/bible/chapter/${val}/1`
        }
        location.href = href(roolNumber)
    });
})()

