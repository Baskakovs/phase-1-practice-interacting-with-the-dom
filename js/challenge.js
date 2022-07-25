let countText = document.getElementById('counter')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const like = document.getElementById('heart')
const header = document.getElementsByTagName('h3')
const comments = document.querySelector('#list')
const pause = document.querySelector('#pause')
const play = document.querySelector('#play')
const commentInput = document.querySelector('#comment-input')
const submitButton = document.querySelector('#submit').addEventListener('click',(event)=> commenting(event))
const restart = document.getElementById('restart')

document.addEventListener('DOMContentLoaded', playing)
minus.addEventListener("click", ()=>countText.innerText--)
plus.addEventListener("click", ()=>countText.innerText++)
like.addEventListener("click", comment)
pause.addEventListener("click", pausing)
play.addEventListener("click", playing)
restart.addEventListener("click", restarting)

let countArray =[]

function commenting(event){
    event.preventDefault()
    const theInput = commentInput.value
    const p = document.createElement('p')
    p.innerText = theInput
    comments.append(p)
}

function increaseCount(){
    countText.innerText++
}

function comment(){
    const cT = countText.innerText
    const index = countArray.findIndex(object=> object['number'] == cT)
    if(index == -1){
        countArray = [...countArray, {number: cT, count: '1'}]
        const comment = document.createElement('p')
        comment.innerText =(` I like ${countText.innerText} `)
        comment.setAttribute('id',countText.innerText)
        comments.append(comment)
    }else if (index != -1){
        let count = ++countArray[index]['count']
        const pE = document.getElementById(`${countText.innerText}`)
        pE.innerText = (` I like ${countText.innerText} x ${count}`)

    }
}



let si
function pausing(){
    play.style.display = 'block'
    pause.style.display = 'none'
    minus.setAttribute('disabled','')
    plus.setAttribute('disabled','')
    like.setAttribute('disabled','')
    clearInterval(si)
    restart.style.display = 'block'
}

function playing(){
    pause.style.display = 'block'
    restart.style.display = 'none'
    play.style.display = 'none'
    si = setInterval(increaseCount, 1000)
    minus.removeAttribute('disabled')
    plus.removeAttribute('disabled')
    like.removeAttribute('disabled')
}

function restarting(){
    clearInterval(si)
    countText.textContent = 0
    playing()
}


