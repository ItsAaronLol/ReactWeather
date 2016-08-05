var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
  getDefaultProps: function(){
    return {
      title: 'Error'
    };
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function(){ //gets called after the elements have been rendered
    var{title, message} = this.props;
    var modalMarkup = (
      <div id="error-modal" className = "reveal tiny text-center" data-reveal = "">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className = "button hollow" data-close = "">
            Okay
          </button>
        </p>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    //findDOMNode takes the component and returns the DOM node where that component lives
    $(ReactDOM.findDOMNode(this)).html($modal);
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
    //foundation by calling modal open makes changes to the dom
    //and react doesn't work well with 3rd party libraries
    //that are updating the dom like that
  },
  render: function(){


    return(
      <div>
      </div>
    );
  }
});

module.exports = ErrorModal;
