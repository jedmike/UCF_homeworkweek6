alert("ALLGOOD");
//Variables Global

var warTools = ["soldiers", "bullets", "bayonets"]





//Functions
function apiCall(tool) {
    var apiKey = "wfEj5TPfgyQGmN4vyp0SLittPQ9wwxny";
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + tool + "&limit=10";
    console.log(queryURL)
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        $("#gifs").empty();
        for (var i = 0; i < response.data.length; i++) {
            var img = $("<img>")
                // console.log(response.data[i].images.fixed_width.url);
            img.attr("src", response.data[i].images.fixed_width.url)
            $("#gifs").append(img);
        }
    });
}

function renderButtons() {
    $("#buttons").empty();
    for (var i = 0; i < warTools.length; i++) {
        var b = $("<button>");
        b.attr("type", "button");
        b.addClass("btn btn-outline-light btn-api");
        b.text(warTools[i]);
        $("#buttons").append(b);
    }
}


//Event listerers for buttons
$(document).on("click", ".btn-api", function() {
    var tool = ($(this)).text();
    apiCall(tool)
        // console.log("clicked");
})

$("#search").on("click", function() {
    var newB = ($("#input")).val();
    // console.log($("#input").val());
    warTools.push(newB);
    renderButtons();
    // apiCall(tool)

})










renderButtons();