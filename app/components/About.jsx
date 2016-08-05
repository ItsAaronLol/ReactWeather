var React = require('react');

// var About = React.createClass({
//   render: function(){
//     return(
//       <h1>About Component</h1>
//     );
//   }
// });

// var About = function(props){
//   return(
//     <h1>About Component</h1>
//   );
// };


//if you only need to render something (stateless)
var About = (props) => {
  return (
    <div>
      <h1>About</h1>
      <p>Welcome to the About Page</p>
    </div>

  )
};

module.exports = About;
