function buildHtmlElements(responseData){
    console.log(responseData);
    
    let title = document.createElement('h2');
    title.id = 'film-title';
    $(title).appendTo($(".film"));
    document.getElementById("film-title").innerHTML = "Title: " + responseData.title;

    
    let episode = document.createElement("p");
    episode.id = "film-episode";
    $(episode).appendTo($(".film"))
    document.getElementById("film-episode").innerHTML = "Episode: " + responseData.episode_id;

    let director = document.createElement("p");
    director.id = "film-director";
    $(director).appendTo($(".film"));
    document.getElementById("film-director").innerHTML = "Director: " + responseData.director;
    
    let date = document.createElement("p");
    date.id = "film-date";
    $(date).appendTo($(".film"));
     document.getElementById("film-date").innerHTML = "Date: " + responseData.release_date;

    let producer = document.createElement("p");
    producer.id = "film-producer";
    $(producer).appendTo($(".film"));
     document.getElementById("film-producer").innerHTML = "Producer: " + responseData.producer;

    let opening_crawl = document.createElement("p");
    opening_crawl.id = "film-crawl";
    $(opening_crawl).appendTo($(".film"));
     document.getElementById("film-crawl").innerHTML = "Opening Crawl: " + responseData.opening_crawl;
}  

function getFilmData(id){
$.ajax({
  url: "https://swapi.co/api/films",
  type: "GET",
  cache: false,
  dataType: "json",
  success: function getFilmData(id){
    buildHtmlElements(id.results[4])
  },
  error: function(a,b,c){
        alert("There has been an error! Try again...");
  } 
});
}

