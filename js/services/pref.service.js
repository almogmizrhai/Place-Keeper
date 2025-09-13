

'use strict'

const storageKeyUser = 'user-pref'

var user = { 
    fullName: '', 
    email : '', 
    age : '', 
    birthDate: '', 
    birthTime: '' ,
    bgColor : '', 
    txtColor : '', 
}

function showAge(newVal) {
    document.getElementById('sAge').innerHTML = newVal
}

function checkAge(dateStr) {
    const calAge = _calculateAge(dateStr)
    const userAge = +document.getElementById('sAge').innerText
    if (calAge === userAge) {
        clearFieldError('sAge')
        clearFieldError('dob')
    }
    else{
        markFieldError('sAge')
        markFieldError('dob')
    }
}

function _calculateAge(dateStr) {
    const today = new Date()
    const birthDate = new Date(dateStr)
    let age = today.getFullYear() - birthDate.getFullYear()
    const m = today.getMonth() - birthDate.getMonth()

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
    }

    return age
}

function markFieldError(fileId){
    const field = document.getElementById(fileId)
    field.classList.add('error')
}

function clearFieldError(fileId){
    const field = document.getElementById(fileId)
    field.classList.remove('error')
}

function updateUserSettings({fullName, email, age, birthDate, birthTime, txtColor, bgColor }) {
    user.fullName = fullName
    user.email = email
    user.age = +age
    user.birthDate = birthDate
    user.birthTime = birthTime
    user.txtColor = txtColor
    user.bgColor = bgColor
    saveSettings(user)
}

function saveSettings(user) {
    saveToStorage(storageKeyUser, user)
}

function renderUserPref() {

    if (loadFromStorage(storageKeyUser)) {
        user = loadFromStorage(storageKeyUser)
    }

    document.body.style.color = user.txtColor
    document.body.style.backgroundColor = user.bgColor
}

function getUserPrefs() {
    return loadFromStorage(storageKeyUser) || user
}