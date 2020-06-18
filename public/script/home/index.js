fetch("home/bookid").then(res => {
    console.log(res)
    const re = JSON.parse(JSON.stringify(res))
    res.json().then(res => {
        console.log(res)
    })
})
