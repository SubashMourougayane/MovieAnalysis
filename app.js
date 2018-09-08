var allData = {};
function getAllData() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://starlord.hackerearth.com/movieslisting", true);
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log(xhr.responseText);
          allData = JSON.parse(xhr.responseText);
          for(var i=0;i<Object.keys(allData).length;i++){
                // console.log("movie",i,allData[i].movie_title);           
                var S = `<div class="card"><div class="container"><h4><b>${allData[i].movie_title}</b></h4><p>${allData[i].director_name}</p></div></div>`;
          }
        } else {
          console.error(xhr.statusText);
        }
      }
    };
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    };
    xhr.send(null);
}