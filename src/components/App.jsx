class App extends React.Component {
  constructor (props){
    super(props);

    //adding lifecycle method to the class
    this.state ={
      results: window.googleMapsData,
      currentResult: window.googleMapsData[0]
    };
  }

  componentDidMount() {
    this.getYelpResults('tacos')
  }

  getYelpResults(query){
    var options = {
      key: this.props.API_SOURCES,
      quert: query
    };

    // this.props.searchYelpQuery(query) {
    //   this.setState({
    //     results: results,
    //     currentResult: result[0]
    //   });
    // };
  }

  handleTableResultEntry(result){
    this.setState({currentResult: result});
  }



//this is where all the components render
render(){
  return(
    <div>
     <nav className="navbar">
      <div className="col-md06 offser-md03">
      <Search handleSearchInput={this.getYelpResults.bind(this)}/>
      </div>
      </nav>
      </div>
  );
 }
}

window.App = App;
