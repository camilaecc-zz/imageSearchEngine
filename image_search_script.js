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
    

  })
}
}
