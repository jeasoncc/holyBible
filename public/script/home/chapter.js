const fromEvent = require("rxjs").fromEvent

const initHeader = (() => {
    var content = document.querySelector('ion-content');
    content.scrollEvents = true;
    fromEvent(content, 'ionScrollStart').subscribe(e => {
        console.log(`scroll start`)
        $(`.headroom`).addClass("headroom--unpinned");
        $(`.bottomRoom`).addClass("bottomRoom--unpinned");
    })
   // fromEvent(content, 'ionScroll').subscribe(e => {
   //     console.log(e.detail)
   // })
    fromEvent(content, 'ionScrollEnd').subscribe(e => {
        console.log('scroll end')
        $(`.headroom`).removeClass("headroom--unpinned");
        $(`.bottomRoom`).removeClass("bottomRoom--unpinned");
    })
})();

const changePageFn = (() => {
    fromEvent($(`.nextButton`), 'click').subscribe((e) => {
        const target = e.currentTarget
        const verse = $(target).attr("data-verse")
        const chapter = $(target).attr("data-chapter")
        const chapterNumber  = $(target).attr("data-chapterNum")
        const href = (verse,chapter) => {
            if(chapter == chapterNumber) return `/bible/chapter/${Number(verse) + 1}/${1}`
            return `/bible/chapter/${verse }/${Number(chapter)+ 1}`
        }
        if(chapter !== chapterNumber) {
            location.href =href(verse, chapter)
        } else {
            presentToast('已经是最后一章了')
        }
    });
    fromEvent($(`.backButton`), 'click').subscribe((e) => {
        const target = e.currentTarget
        const verse = $(target).attr("data-verse")
        const chapter = $(target).attr("data-chapter")
        const href = (verse,chapter) => {
            if(chapter > 1) return `/bible/chapter/${verse }/${Number(chapter) - 1}`
            return `/bible/chapter/${verse }/${Number(chapter) }`
        }
        if(chapter > 1) {
            location.href =href(verse, chapter)
        } else {
            presentToast('已经是第一章了')
        }
    });
})()
