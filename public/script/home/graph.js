const fromEvent = require("rxjs").fromEvent
const throttleTime = require('rxjs/operators').throttleTime
const  of =  require('rxjs').of;
const  fromFetch =  require('rxjs/fetch').fromFetch ;
const switchMap= require('rxjs/operators').switchMap
const catchError = require('rxjs/operators').catchError
const $ = require("jquery")


fromEvent($(`.rollButton`), 'click').subscribe((e) => {
    const target = e.currentTarget
    console.log(target )
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
//fetchFn('/bookid', (res) => {
//    const conten = res.bookId.map(cur => {
//        return {
//            title: cur.FullName
//        }
//    })
//    $('.ui.search').search({source: conten})
//})
