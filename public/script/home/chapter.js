const fromEvent = require("rxjs").fromEvent
const Headroom = require("headroom.js");
var myElement = document.querySelector("header");
var headroom  = new Headroom(myElement);
const  fromFetch =  require('rxjs/fetch').fromFetch ;
const switchMap= require('rxjs/operators').switchMap
const catchError = require('rxjs/operators').catchError
const R = require("ramda")
headroom.init();

fromEvent($(`.studiovinari `), 'click').subscribe((e) => {
    $(e.currentTarget).transition('pulse')
});
//
//

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
const fetchChapter = (x, y) => {
    return fetchFn(`chapter/${x}/${y}`, (res) => {
        const view = (volumeSN, pra) => `
            <div class="my1 items-center">
                <a class="ui green large ribbon label self-baseline">
                    <span>创世纪</span>
                    <span>第${volumeSN}章</span>
                </a>
                ${pra}
            </div>
                     `
        const pragph = (VerseSN, Lection) => `
                <p class="my2 flex item-center">
                    <span class="ui self-baseline  circular label">${VerseSN}</span>
                    <span class="pl1">${Lection}</span>
                </p>
                     `
        const pargphs = res.chapter.map(cur => {
            return pragph(cur.VerseSN, cur.Lection)
        })
        const textPargphs = R.join('', pargphs )
        const main = view(res.verseSN,textPargphs  )
        $('#main').append(main)
    })
}
//fetchChapter(1,1)
var mySwiper = new Swiper('.swiper-container', {
    autoplay:true,
    loop: true, // 循环模式选项
    virtual: true,
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})
