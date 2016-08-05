var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function(){
//     // var location = this.props.location;
//     // var temp = this.props.temp;
//     var {location, temp} = this.props;
//     return (
//       <h3>It is {temp} in {location}</h3>
//     );
//   }
// })

// var WeatherMessage = (props) => {
//   var {location, temp} = props;
//   return (
//     <h3>It is {temp} in {location}</h3>
//   );
// }

var WeatherMessage = ({temp, location}) => {
  return (
    <h3 className = "text-center">It is {temp} in {location}</h3>
  );
}

module.exports = WeatherMessage;
