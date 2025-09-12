

'use strict'


function onInit(){
    renderPlaces()
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
        onAddPlace(name, lat, lng, gMap.getZoom())
        renderPlaces()
    })
    renderMarkers()
}

