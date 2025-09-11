

'use strict'


function makeId(length = 4) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let id = ''
    for (let i = 0; i < length; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return id
}

function showMsg(txt) {
    var elMsg = document.querySelector('.user-msg')
    elMsg.innerHTML = txt

    elMsg.classList.add('show')

    setTimeout(() => {
        elMsg.classList.remove('show')
    }, 2000)
}
