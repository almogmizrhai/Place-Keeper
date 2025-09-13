

'use strict'


function makeId(length = 4) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let id = ''
    for (let i = 0; i < length; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return id
}

function flashMsg(msg){
    const elUserMsg = document.querySelector('.user-msg')
    elUserMsg.innerText = msg
    elUserMsg.classList.add('open')
    
    setTimeout(()=>{
        elUserMsg.classList.remove('open')
    }, 3000)
}
