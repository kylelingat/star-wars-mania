function test(){
$.ajax({
  url: "https://swapi.co/api/films",
  type: "GET",
  cache: false,
  dataType: "json",
  success: function getFilmData(html){
    console.log(html);
    var g = document.createElement('div');
    g.id = 'film-title';
  },
  error: function(a,b,c){
        alert("There has been an error! Try again...");
  } 
});
}
