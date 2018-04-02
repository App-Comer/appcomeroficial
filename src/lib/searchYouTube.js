var url = "https://www.googleapis.com/youtube/v3/search";
var searchYouTube = ({key, query, max = 5}, callback) => {
  // TODO
  var options = {
    key: key,
    q: query,
    maxResults: max,
    part:'snippet',
    type: 'video',
    videoEmbeddable: true
  };

  $.ajax({
    type: 'GET',
    url: url,
    data: options,
    contentType: 'application/JSON',
    success: (data) => {
       if(data.items.length > 0){
         callback(data.items);
       }
    },
    fail: (err) => {
      console.log("error");
    }
  });
};

window.searchYouTube = searchYouTube;
