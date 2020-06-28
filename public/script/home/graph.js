const fromEvent = require("rxjs").fromEvent
const throttleTime = require('rxjs/operators').throttleTime
const  of =  require('rxjs').of;
const  fromFetch =  require('rxjs/fetch').fromFetch ;
const switchMap= require('rxjs/operators').switchMap
const catchError = require('rxjs/operators').catchError

console.log(123)
console.log(123)
console.log(123)

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


fromEvent($(`.roll`), 'click').subscribe((e) => {
    $(e.currentTarget).transition('pulse').transition('pulse')
});

const fetchFn = (val, fn) => {
    const data$ = fromFetch(val).pipe(
     switchMap(response => {
       if (response.ok) {
         return response.json();
       } else {
         return of({ error: true, message: `Error ${response.status}` });
       }
     }),
     catchError(err => {
       console.error(err);
       return of({ error: true, message: err.message })
     })
    );

    data$.subscribe({
     next: result => fn(result),
     complete: () => console.log('done')
    });
}
fetchFn('bookid', (res) => {
    const conten = res.bookId.map(cur => {
        return {
            title: cur.FullName
        }
    })
    $('.ui.search').search({source: conten})
})
