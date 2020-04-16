function searchPhotos(){
  let clientID = "1XITqDaEsHKW9KLciUZfsQd5vquw4IjQ628f-SQvZ_c" //API Access key 
  let query = document.getElementById("search").value //search value 
  let url= "https://api.unsplash.com/search/photos?client_id="+clientID+"&query="+query // the API 
  
  //request to the API 
  fetch(url)
    .then(function(data){
      return data.json();
    })
    .then(function(data){
      console.log(data);
      console.log(url);
       data.results.forEach(photo => {
        image =`
        <img src="${photo.urls.regular}" height= "200" width = "200"
        onclick="document.getElementById('images').style.backgroundImage= 'url(${photo.urls.regular})' ">
        `
        document.getElementById("result").innerHTML += image


    });

  })
}
}
