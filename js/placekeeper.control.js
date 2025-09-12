

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

function onRemovePlace(placeId){
   removePlace(placeId)
   renderPlaces()
}

function onAddPlace(name, lat, lng, zoom){
    addPlace(name, lat, lng, zoom)
}

function onGoPlace(placeId){
    const place = getPlaceById(placeId)
    gMap.setCenter({ lat: place.lat, lng: place.lng })
    gMap.setZoom(place.zoom)
}

function onGoToMyLocation() {
    if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser")
        return
    }

    navigator.geolocation.getCurrentPosition(
        pos => {
            const lat = pos.coords.latitude
            const lng = pos.coords.longitude
            const myLatLng = { lat, lng }

            gMap.setCenter(myLatLng)
            gMap.setZoom(15)
            
            if (gMyMarker) {
                gMyMarker.setPosition(myLatLng)
            } else {
                gMyMarker = new google.maps.Marker({
                    position: myLatLng,
                    map: gMap,
                    title: "You are here!",
                })
            }
        },
        err => {
            console.error("Error:", err)
            alert("Couldn't fetch your location")
        }
    )
}