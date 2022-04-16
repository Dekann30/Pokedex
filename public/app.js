console.log('connected static js')
//only for DOM manipulation

$('#bottom').on('click', ()=>{
    $('.main')[0].scrollIntoView(false)
})

$('#top').on('click', ()=>{
    $('.main')[0].scrollIntoView(true)
})