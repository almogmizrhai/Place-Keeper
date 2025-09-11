

'use strict'


function renderPlaces() {
    console.log('Places', gPlaces)
    
    var strHTMLs = gPlaces.map(function(place) {
        return `<li>
            ${place.name} - (${place.lat}, ${place.lng}) 
            <button onclick="onRemovePlace('${place.id}')" class="btn">X</button>
            <button onclick="onGoPlace('${place.id}')" class="btn">Go</button>
        </li>`
    })
    document.querySelector('.places-list').innerHTML = strHTMLs.join('')
}


function onRemovePlace(placeId){
   removePlace(placeId)
   renderPlaces()

}

function onGoPlace(placeId){
    console.log('onGoPlace', placeId)
}