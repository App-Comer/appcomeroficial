class App extends React.Component {
  constructor (props) {
    super(props);

    //adding lifecycle method to the class
    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    };
  }

  //Invokes getYouTubeVideos which renders the app component again
  //with the right state variables
  componentDidMount() {
    this.getYouTubeVideos('I love you barney');
  }

  //here we are using query from searchYouTube component to get the
  //properties of the video
  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };

    //getting options from searchYouTube and videos from query
    this.props.searchYouTube(options, (videos)=>{
      this.setState({
        videos: videos,
        currentVideo: videos[0] //let's play the first video on the array
      });
    });
  }

  handleVideolistEntryTitleClick(video) {
    this.setState({currentVideo: video});
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearchInput={this.getYouTubeVideos.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos = {this.state.videos} handleVideolistEntryTitleClick={this.handleVideolistEntryTitleClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;



// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <Search />
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <VideoPlayer video={window.exampleVideoData[0]} />
//       </div>
//       <div className="col-md-5">
//         <VideoList videos = {window.exampleVideoData} />
//       </div>
//     </div>
//   </div>
