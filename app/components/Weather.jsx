var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false,
      errorMessage: undefined
    }
  },
  handleSearch: function(location){
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      })

    }, function(e){
        that.setState({
          isLoading: false,
          errorMessage: e.message
        });
      alert(errorMessage);
    });
  },

  componentDidMount: function(){ //called after everything is rendered
    //when you use react-router, you get access to a ton of props
    //some of them being the query strings
    var location = this.props.location.query.location;
    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function(newProps){ //called anytime the component's props get updated
    var location = newProps.location.query.location;
    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  //called everytime setState is called
  render: function(){
    // var location = this.state.location;
    // var temp = this.state.temp;
    var {isLoading, location, temp, errorMessage} = this.state;
    function renderMessage(){
      if(isLoading){
        return <h3 className = "text-center">Fetching weather...</h3>
      } else if (temp && location){
        return <WeatherMessage location={location} temp={temp}/>
      }
    }

    function renderError () {
      if(typeof errorMessage === 'string'){
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return(
      <div>
        <h1 className = "text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
})

module.exports = Weather;
