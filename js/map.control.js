

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

function renderMarkers() {
    const places = getPlaces()
    // remove previous markers
    gMarkers.forEach(marker => marker.setMap(null))
    // every place is creating a marker
    gMarkers = places.map(place => {
        return new google.maps.Marker({
            position: place,
            map: gMap,
            title: place.name
        })
    })
    console.log('Markers:', gMarkers)
}

function onRemovePlace(placeId){
   removePlace(placeId)
   renderPlaces()
   renderMarkers()
   flashMsg('Place removed!')
}

function onAddPlace(name, lat, lng, zoom){
    addPlace(name, lat, lng, zoom)
    renderMarkers()
    flashMsg('Place added!')
}

function onGoPlace(placeId){
    const place = getPlaceById(placeId)
    gMap.setCenter({ lat: place.lat, lng: place.lng })
    gMap.setZoom(place.zoom)
    flashMsg('You are here!')
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
    flashMsg('My location!')
}