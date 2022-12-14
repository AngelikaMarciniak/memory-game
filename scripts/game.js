const tiles = document.querySelector('.tiles')
let firstClick = ""
let secondClick = ""
let moves = 0
let points = 0

const randomize = () => {
    let list = document.querySelectorAll('.card')
    list = Array.prototype.slice.call(list);
    list.forEach(e => {
        random = Math.floor(Math.random()*15+1)
        e.style.order = random
    })
    list.forEach(e => {
        e.firstChild.classList.toggle('notactive')
        e.lastChild.classList.toggle('notactive')
        e.firstChild.classList.toggle('is-flipped');
        e.lastChild.classList.toggle('is-flipped');
    })
    document.querySelector('h1').textContent = 'randomizing...'
    setTimeout(() => {
        list.forEach(e => {
            e.firstChild.classList.toggle('notactive')
            e.lastChild.classList.toggle('notactive')
            e.firstChild.classList.toggle('is-flipped');
            e.lastChild.classList.toggle('is-flipped');
            document.querySelector('h1').textContent = 'MatchIT!'
        })
    },1000)
}
randomize()

const continues = () => {
    if(firstClick.lastChild.getAttribute('animal') == secondClick.lastChild.getAttribute('animal')) {
        console.log('great')
        firstClick.style.border = '3px solid green'
        secondClick.style.border = '3px solid green'
        firstClick.classList.toggle('complete')
        secondClick.classList.toggle('complete')
        firstClick = ""
        secondClick = ""
        points++
        if(points == 8) {
            document.querySelector('h1').textContent = 'You Win Game!'
        }
    } else {
        console.log('notgreat')
        setTimeout(() => {
            firstClick.classList.toggle('is-flipped');
            secondClick.classList.toggle('is-flipped');
            firstClick.firstChild.classList.toggle('notactive')
            firstClick.lastChild.classList.toggle('notactive')
            secondClick.firstChild.classList.toggle('notactive')
            secondClick.lastChild.classList.toggle('notactive')
            firstClick = ""
            secondClick = ""
        }, 1000)
    }
}

tiles.addEventListener('click', (e) => {
    if(e.target.closest('div').classList.contains('card')) {
        console.log(e.target.closest('div'))
        if(e.target.closest('div').classList.contains('complete')) {
            console.log('its complete')
        } else {
        if(firstClick == "") {
            firstClick = e.target.closest('div')
            firstClick.classList.toggle('is-flipped');
            firstClick.firstChild.classList.toggle('notactive')
            firstClick.lastChild.classList.toggle('notactive')
            moves++
            movesUpdate()
        } 
        else if(secondClick == "") {
            secondClick = e.target.closest('div')
            secondClick.classList.toggle('is-flipped');
            secondClick.firstChild.classList.toggle('notactive')
            secondClick.lastChild.classList.toggle('notactive')
            moves++
            movesUpdate()
            continues()
        } else {
            console.log('stop clicking')
        }}
    }
})

movesUpdate = () => {
    document.querySelector('.movesCounter').textContent = moves
}

const refresh = document.querySelector('.fa-redo')
refresh.addEventListener('click', () => {
    location.reload();
})
