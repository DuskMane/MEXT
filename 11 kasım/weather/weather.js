let apiKey = "af89fcef685d7383e700a74e2b90d887"
let longitute;
let latitute;

function bringData(){
    longitute = document.getElementById("long").value;
    latitute = document.getElementById("lat").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitute}&lon=${longitute}&appid=${apiKey}`).then((Response) => Response.json()).then((data) => {
        document.getElementById("result").innerHTML = "Weather:" + data.main.temp;
    })
}