var Search = ({handleOnSearchChange}) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange ={(event) =>
      {handleOnSearchChange(event.target.value)}}/>
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

getRestaurant(query) {
  var Options = {
    key: this.props.API_KEY_YELP,
    query: query,
    max: 50
  }

  this.props.searchRestaurant(Options, (googleMapsData) => {
    this.setState({restaurant : searchRestaurant, googleMapsData : data[50]});
});
}


window.Search = Search;
