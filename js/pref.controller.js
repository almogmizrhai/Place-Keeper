

'use strict'


function onInitSettings() {
    const user = getUserPrefs()
    document.getElementById('fullName').value = user.fullName
    document.getElementById('email').value = user.email
    document.getElementById('age').value = user.age
    document.getElementById('dob').value = user.birthDate
    document.getElementById('birthTime').value = user.birthTime
    document.getElementById('bgColor').value = user.bgColor
    document.getElementById('txtColor').value = user.txtColor

    showAge(user.age)
}

function onSubmit(elFormSettings, ev) {
    ev.preventDefault()

    const formData = new FormData(elFormSettings)
    const user = Object.fromEntries(formData)

    updateUserSettings(user)
    flashMsg('User saved')
}

function onCheckAge(dateStr) {
    checkAge(dateStr)
}