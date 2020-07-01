const fromEvent = require("rxjs").fromEvent

const changePageFn = (() => {
    fromEvent($(`.nextButton`), 'click').subscribe((e) => {
        const target = e.currentTarget
        const verse = $(target).attr("data-verse")
        const chapter = $(target).attr("data-chapter")
        const chapterNumber  = $(target).attr("data-chapterNum")
        console.log(chapterNumber  )
        const href = (verse,chapter) => {
            if(chapter == chapterNumber) return `/bible/chapter/${Number(verse) + 1}/${1}`
            return `/bible/chapter/${verse }/${Number(chapter)+ 1}`
        }
        location.href =href(verse, chapter)
    });
    fromEvent($(`.backButton`), 'click').subscribe((e) => {
        const target = e.currentTarget
        const verse = $(target).attr("data-verse")
        const chapter = $(target).attr("data-chapter")
        const href = (verse,chapter) => {
            if(chapter > 1) return `/bible/chapter/${verse }/${Number(chapter) - 1}`
            return `/bible/chapter/${verse }/${Number(chapter) }`
        }
        location.href =href(verse, chapter)
    });
})()
