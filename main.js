// const x = document.getElementById("demo");

function getLocation() {
    const x = document.getElementById("demo");
    try {
        navigator.geolocation.getCurrentPosition(showPosition);
    } catch (err) {
        x.innerHTML = err;
    }
}

function showPosition(position) {
    const x = document.getElementById("demo");
    x.innerHTML =
        "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}