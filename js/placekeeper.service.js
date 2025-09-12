

'use strict'


var gPlaces = []
let gMap

const MAP_KEY = 'AIzaSyClnx_S-0AQ2TYgfx3B7z2z2LKD9NSJm18'
const STORAGE_KEY = 'places'
_createPlaces()

function getPlaces(){
    return gPlaces
}

function removePlace(placeId){
    const idx = gPlaces.findIndex(place => place.id === placeId)
    if (idx === -1) return
    gPlaces.splice(idx, 1)
}

function addPlace(name, lat, lng, zoom){
    const place = _createPlace(name, lat, lng, zoom)
    gPlaces.push(place)
    _savePlacesToStorage()
}

function getPlaceById(placeId){
    return gPlaces.find(place => place.id === placeId)
}

function _createPlace(name, lat, lng, zoom){
    const place = {
        id: makeId(),
        name,
        lat,
        lng,
        zoom,
    }
    return place
}

function _createPlaces() {
    gPlaces = loadFromStorage(STORAGE_KEY)

    if (!gPlaces || !gPlaces.length) {
        gPlaces = [
            _createPlace('Pukis house', 32.1416, 34.831213, 15),
            _createPlace('lolo house', 32.353985, 35.118877, 15),
        ]
        _savePlacesToStorage()
    }
}

function _savePlacesToStorage(){
    saveToStorage(STORAGE_KEY, gPlaces)
}