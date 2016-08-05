var React = require('react');
var {Link} = require('react-router');

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
      <h1 className = 'text-center'>About Component</h1>
      <p>About:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a>
        </li>
      </ul>
    </div>

  )
};

module.exports = About;
