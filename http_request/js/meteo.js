 document.getElementById("city").focus();
        let timeOut, apikey = "34f0d81dbea235db8fdfba4e8144b7aa";

        function loadWeather() {
        	'use strict'
            document.getElementById('weather').innerHTML = "Chargement...";
            timeOut = setTimeout(function() {
                let city = document.getElementById('city').value;
                let link = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + apikey + "&units=metric";
                document.getElementById('weather').innerHTML = "Chargement de la météo de " + city + "...";
                let request = new XMLHttpRequest();
                request.open('GET', link, false);
                request.send(null);
                if (request.status == 200) {
                    let response = JSON.parse(request.responseText);
                    document.getElementById('weather').innerHTML =
                        "Météo de " + response['name'] + " :<br />" +
                        "<img src='http://openweathermap.org/img/w/" + response['weather'][0]['icon'] + ".png' style='margin-right:15px;float:left;' />" +
                        "T°: " + response['main']['temp'] + "°C<br />" ;
                } else {
                    document.getElementById('weather').innerHTML = "Quelque chose n'a pas fonctionné.";
                }
            }, 3000);
        }