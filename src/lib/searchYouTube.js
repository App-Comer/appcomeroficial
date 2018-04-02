var url = 'https://www.googleapis.com/youtube/v3/search';

//making a GET request to bring data from youtube's API
var searchYouTube = ({key, query, max = 5}, callback) => {
  //options object with propertiesrequired
  //variable that get the properties required
  var options = {
    key: key,
    q: query,
    maxResults: max,
    part: 'snippet',
    type: 'video',
    videoEmbeddable: true
  };

  //GET request using jQuery
  $.ajax({
    type: 'GET',
    url: url,
    data: options,
    contentType: 'application/JSON',
    success: (data) => { //if it works do this:
      if (data.items.length > 0) {
        callback(data.items);
      }
    },
    fail: (err) => { //if not just do whats below:
      console.log('error');
    }
  });
};

//this is how we can access to this library from other components
window.searchYouTube = searchYouTube;
