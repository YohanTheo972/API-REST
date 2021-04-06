
function callback(data) {
    // Si c'est un tableau
    if (Array.isArray(data)) {
        console.log(data);
        var html = "<h2>Résultats de la recherche </h2>";
        for (i = 0; i < data.length; i++) {
            html += "<p>Continent : " + data[i].continent + "</p>"
        }
        $("#results").html(html);
    }
    else { // Si c'est un seul objet
        console.log(data);
        var html = "<h2>Résultats de la recherche </h2>";
        html += "<p>Continent : " + data.continent + "</p>"
        html += "<p>Nombre de morts : " + data.deaths + "</p>"
        html += "<p>Nombre de morts lors des dernières 24h : " + data.todayDeaths + "</p>"
        $("#results").html(html);
    }
}

function buttonClickGET() {

    // Récupère la valeur du radio sélectionné
    var typeCherche = $("input[type=radio]:checked").val();
    // Récupère la valeur du champ de recherche
    var valeurCherche = $("#search").val();

    var url = "https://disease.sh/v3/covid-19/" + typeCherche + "/" + valeurCherche;

    $.get(url, callback);
}