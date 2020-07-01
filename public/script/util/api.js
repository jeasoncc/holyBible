const  fromFetch =  require('rxjs/fetch').fromFetch ;
const switchMap= require('rxjs/operators').switchMap
const catchError = require('rxjs/operators').catchError
const  of =  require('rxjs').of;

export const fetchFn = (val, fn) => {
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
