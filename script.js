mapboxgl.accessToken = 
mapboxgl.accessToken = 
"pk.eyJ1IjoiZGV2YW5zaHBvcGxpIiwiYSI6ImNscm0yZGxzbjBkODcya3FqMTB4dDhjamQifQ.pKtd3N3n7yC-jciJveL3Jg";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true} )

var distance = turf.distance(to, from, options);

var to = navigator.geolocation.getCurrentPosition(userData)
var from = navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true} )

var value = document.getElementById('map-overlay')
value.innerHTML = "Distance: " + distance.toFixed([2]) + " miles"


function successLocation(position){
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
} 
function errorLocation(){
    setupMap([-2.24, 53.48])
}
function setupMap(center){
const map = new mapboxgl.Map({
    container: 'map',
    style: "mapbox://styles/mapbox/streets-v11",
    center : center,
    zoom: 15
}) 

map.addControl(
    new MapboxDirections({
    accessToken: mapboxgl.accessToken
    }),
    'top-left'
    );

}

function userData(){
  
}