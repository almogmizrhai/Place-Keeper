

'use strict'


function renderPlaces(){
    console.log('renderPlaces')
    var strHTMLs = places.map(function(place){
        return `<li>
        ${place.name} - (${place.lat}, ${place.lng}) 
        <button onclick="onRemovePlace(this.value)" class="btn">X</button>
        <button onclick="onGoPlace(this.value)" class="btn">Go</button>
        </li>`
    })
    document.querySelector('.places-list').innerHTML = strHTMLs.join('')
}

function onRemovePlace(placeId){
    console.log('onRemovePlace', placeId)
}

function onGoPlace(placeId){
    console.log('onGoPlace', placeId)
}