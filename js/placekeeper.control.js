

'use strict'


function renderPlaces() {
    var places = getPlaces()
    console.log('Places:', places)

    var strHTMLs = places.map(function(place) {
        return `<li>
            ${place.name} - (${place.lat}, ${place.lng}) 
            <button onclick="onRemovePlace('${place.id}')" class="btn">❌</button>
            <button onclick="onGoPlace('${place.id}')" class="btn">📍 Go</button>
        </li>`
    })
    document.querySelector('.places-list').innerHTML = strHTMLs.join('')
}

function initMap() {
    gMap = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 29.5577, lng: 34.9519 },
        zoom: 15,
    })
    
    gMap.addListener('click', ev => { 
        const name = prompt('Place name?', 'Place 1')
        const lat = ev.latLng.lat()
        const lng = ev.latLng.lng()
        addPlace(name, lat, lng, gMap.getZoom())
        renderPlaces()
    })
}


function onRemovePlace(placeId){
   removePlace(placeId)
   renderPlaces()
}

function onAddPlace(){
    addPlace()
}

function onGoPlace(placeId){
    const place = getPlaceById(placeId)
    gMap.setCenter({ lat: place.lat, lng: place.lng })
    gMap.setZoom(place.zoom)
}