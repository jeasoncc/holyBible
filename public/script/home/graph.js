const fromEvent = require("rxjs").fromEvent
//import { throttleTime, map, scan } from 'rxjs/operators';
const throttleTime = require('rxjs/operators').throttleTime
Array.from($('.roll')).map(cur => {
    if(Number($(cur).attr('data-value'))) return $(cur).css('display', 'none')
})
const bookClickFn = (val, newOrOld) => {
    fromEvent($(`${val}`), 'click').subscribe(() => {
        $('.book').removeClass('active')
        $(`${val}`).addClass('active')
        $(`${val}`).transition('pulse')
        Array.from($('.roll')).map(cur => {
            if($(cur).attr('data-value') == newOrOld) return $(cur).css('display', 'block')
            return $(cur).css('display', 'none')
        })
    });
}
bookClickFn('.new.book', 1)
bookClickFn('.old.book', 0)
